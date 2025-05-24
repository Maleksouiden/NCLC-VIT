import { useState, useCallback, useRef } from "react";

export const useUndoRedo = (initialState) => {
  const [history, setHistory] = useState([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const currentState = history[currentIndex];

  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  const setState = useCallback(
    (newState, immediate = false) => {
      // Si ce n'est pas immédiat, on utilise un debounce pour éviter trop d'enregistrements
      if (!immediate) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setHistory((prev) => {
            // Supprimer tout l'historique après l'index actuel
            const newHistory = prev.slice(0, currentIndex + 1);
            // Ajouter le nouvel état
            newHistory.push(newState);
            // Limiter l'historique à 50 états pour éviter les problèmes de mémoire
            if (newHistory.length > 50) {
              newHistory.shift();
              setCurrentIndex((prev) => prev - 1);
            }
            return newHistory;
          });
          setCurrentIndex((prev) => Math.min(prev + 1, 49));
        }, 1500); // Attendre 1.5s avant d'enregistrer pour les modifications de texte
        return;
      }

      // Pour les actions immédiates (ajout/suppression de blocs)
      setHistory((prev) => {
        const newHistory = prev.slice(0, currentIndex + 1);
        newHistory.push(newState);
        if (newHistory.length > 50) {
          newHistory.shift();
          setCurrentIndex((prev) => prev - 1);
        }
        return newHistory;
      });
      setCurrentIndex((prev) => Math.min(prev + 1, 49));
    },
    [currentIndex]
  );

  const undo = useCallback(() => {
    if (canUndo) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [canUndo]);

  const redo = useCallback(() => {
    if (canRedo) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [canRedo]);

  const reset = useCallback((newInitialState) => {
    setHistory([newInitialState]);
    setCurrentIndex(0);
  }, []);

  // Fonction pour mettre à jour l'état actuel sans enregistrer dans l'historique
  const setCurrentState = useCallback(
    (newState) => {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory[currentIndex] = newState;
        return newHistory;
      });
    },
    [currentIndex]
  );

  return {
    state: currentState,
    setState,
    setCurrentState,
    undo,
    redo,
    canUndo,
    canRedo,
    reset,
  };
};
