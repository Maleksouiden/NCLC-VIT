export const exportToHTML = (blocks) => {
  const generateBlockHTML = (block) => {
    const sectionId = block.props.sectionId
      ? ` id="${block.props.sectionId}"`
      : "";

    switch (block.type) {
      case "text":
        return `
          <div${sectionId} style="padding: ${
          block.props.padding || "20px"
        }; text-align: ${block.props.textAlign || "left"};">
            <p style="font-size: ${block.props.fontSize || 16}px; color: ${
          block.props.color || "#000000"
        }; font-weight: ${block.props.fontWeight || "normal"}; font-style: ${
          block.props.fontStyle || "normal"
        }; text-decoration: ${
          block.props.textDecoration || "none"
        }; line-height: 1.6; margin: 0;">
              ${block.props.content || "Votre texte ici"}
            </p>
          </div>
        `;

      case "image":
        return `
          <div style="padding: ${block.props.padding || "20px"}; text-align: ${
          block.props.textAlign || "center"
        };">
            <img
              src="${
                block.props.src ||
                "https://via.placeholder.com/400x200?text=Image"
              }"
              alt="${block.props.alt || "Image"}"
              style="width: ${block.props.width || "100%"}; height: ${
          block.props.height || "auto"
        }; border-radius: ${block.props.borderRadius || 0}px; border: ${
          block.props.border || "none"
        }; box-shadow: ${
          block.props.boxShadow || "none"
        }; max-width: 100%; display: block; margin: ${
          block.props.textAlign === "center"
            ? "0 auto"
            : block.props.textAlign === "right"
            ? "0 0 0 auto"
            : "0"
        };"
            />
          </div>
        `;

      case "button":
        return `
          <div style="padding: ${block.props.padding || "20px"}; text-align: ${
          block.props.textAlign || "center"
        };">
            <a
              href="${block.props.url || "#"}"
              style="display: inline-block; padding: ${
                block.props.size === "large"
                  ? "12px 24px"
                  : block.props.size === "small"
                  ? "6px 12px"
                  : "8px 16px"
              }; background-color: ${
          block.props.customColor || "#1976d2"
        }; color: ${
          block.props.customTextColor || "#ffffff"
        }; text-decoration: none; border-radius: ${
          block.props.borderRadius || 8
        }px; font-weight: bold; border: ${
          block.props.variant === "outlined" ? "2px solid #1976d2" : "none"
        }; ${
          block.props.variant === "outlined"
            ? "background-color: transparent; color: #1976d2;"
            : ""
        }"
            >
              ${block.props.text || "Bouton"}
            </a>
          </div>
        `;

      case "navbar":
        const navLinks = (block.props.links || [])
          .map(
            (link) =>
              `<a href="${link.url}" style="color: ${block.props.textColor}; text-decoration: none; margin: 0 16px; font-weight: 500;">${link.text}</a>`
          )
          .join("");

        return `
          <nav style="background-color: ${
            block.props.backgroundColor || "#ffffff"
          }; color: ${
          block.props.textColor || "#333333"
        }; padding: 16px 24px; border-bottom: 1px solid ${
          block.props.textColor
        }20; display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 20px; font-weight: bold; color: ${
              block.props.textColor
            };">
              ${block.props.logo || "Logo"}
            </div>
            <div style="display: flex; align-items: center;">
              ${navLinks}
            </div>
          </nav>
        `;

      case "hero":
        const backgroundStyle = block.props.backgroundImage
          ? `background-image: url(${block.props.backgroundImage}); background-size: cover; background-position: center; background-repeat: no-repeat;`
          : `background-color: ${block.props.backgroundColor || "#f5f5f5"};`;

        return `
          <section${sectionId} style="${backgroundStyle} padding: ${
          block.props.padding || "80px 20px"
        }; text-align: ${block.props.textAlign || "center"}; color: ${
          block.props.textColor || "#333333"
        }; position: relative;">
            ${
              block.props.backgroundImage
                ? '<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.3); z-index: 1;"></div>'
                : ""
            }
            <div style="max-width: 800px; margin: 0 auto; position: relative; z-index: 2;">
              <h1 style="font-size: 48px; font-weight: bold; margin: 0 0 24px 0; line-height: 1.2;">
                ${block.props.title || "Titre Principal"}
              </h1>
              <p style="font-size: 24px; margin: 0 0 32px 0; opacity: 0.9; line-height: 1.4;">
                ${block.props.subtitle || "Sous-titre descriptif"}
              </p>
              ${
                block.props.showButton && block.props.buttonText
                  ? `
                <a href="${
                  block.props.buttonUrl || "#"
                }" style="display: inline-block; padding: 12px 32px; background-color: #1976d2; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px;">
                  ${block.props.buttonText}
                </a>
              `
                  : ""
              }
            </div>
          </section>
        `;

      case "card":
        const isHorizontal = block.props.layout === "horizontal";
        return `
          <div style="padding: ${block.props.padding || "20px"};">
            <div style="border-radius: ${
              block.props.borderRadius || 8
            }px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden; ${
          isHorizontal ? "display: flex;" : ""
        }">
              ${
                block.props.image
                  ? `
                <img
                  src="${block.props.image}"
                  alt="${block.props.title}"
                  style="width: ${
                    isHorizontal ? "300px" : "100%"
                  }; height: 200px; object-fit: cover;"
                />
              `
                  : ""
              }
              <div style="padding: 24px; ${isHorizontal ? "flex: 1;" : ""}">
                <h3 style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0;">
                  ${block.props.title || "Titre de la carte"}
                </h3>
                <p style="color: #666; margin: 0 0 16px 0; line-height: 1.6;">
                  ${block.props.content || "Contenu de la carte"}
                </p>
                ${
                  block.props.showButton && block.props.buttonText
                    ? `
                  <a href="${
                    block.props.buttonUrl || "#"
                  }" style="display: inline-block; padding: 8px 16px; background-color: #1976d2; color: #ffffff; text-decoration: none; border-radius: 4px; font-weight: bold;">
                    ${block.props.buttonText}
                  </a>
                `
                    : ""
                }
              </div>
            </div>
          </div>
        `;

      case "footer":
        const socialLinks = (block.props.socialLinks || [])
          .map(
            (social) =>
              `<a href="${social.url}" style="color: ${block.props.textColor}; margin: 0 8px; text-decoration: none;">${social.platform}</a>`
          )
          .join("");

        return `
          <footer style="background-color: ${
            block.props.backgroundColor || "#333333"
          }; color: ${block.props.textColor || "#ffffff"}; padding: ${
          block.props.padding || "40px 20px"
        }; text-align: ${block.props.textAlign || "center"};">
            <div style="max-width: 1200px; margin: 0 auto;">
              ${
                block.props.showSocial && socialLinks
                  ? `
                <div style="margin-bottom: 16px;">
                  ${socialLinks}
                </div>
              `
                  : ""
              }
              <p style="margin: 0; opacity: 0.8; font-size: 14px;">
                ${block.props.text || "© 2024 Mon Site. Tous droits réservés."}
              </p>
            </div>
          </footer>
        `;

      case "video":
        const getYouTubeEmbedUrl = (url) => {
          if (url.includes("youtube.com/watch?v=")) {
            const videoId = url.split("v=")[1]?.split("&")[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=${
              block.props.autoplay ? 1 : 0
            }&controls=${block.props.controls ? 1 : 0}`;
          } else if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1]?.split("?")[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=${
              block.props.autoplay ? 1 : 0
            }&controls=${block.props.controls ? 1 : 0}`;
          }
          return url;
        };

        const embedUrl = getYouTubeEmbedUrl(block.props.url || "");

        return `
          <div style="padding: ${block.props.padding || "20px"}; text-align: ${
          block.props.textAlign || "center"
        };">
            <iframe
              src="${embedUrl}"
              width="${block.props.width || "100%"}"
              height="${block.props.height || "315"}"
              style="border: none; border-radius: 8px; max-width: 100%; display: block; margin: ${
                block.props.textAlign === "center"
                  ? "0 auto"
                  : block.props.textAlign === "right"
                  ? "0 0 0 auto"
                  : "0"
              };"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        `;

      case "form":
        const formFields = (block.props.fields || [])
          .map((field) =>
            field.type === "textarea"
              ? `<textarea placeholder="${field.label}" ${
                  field.required ? "required" : ""
                } style="width: 100%; padding: 12px; margin-bottom: 16px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; resize: vertical; min-height: 100px;"></textarea>`
              : `<input type="${field.type}" placeholder="${field.label}" ${
                  field.required ? "required" : ""
                } style="width: 100%; padding: 12px; margin-bottom: 16px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit;" />`
          )
          .join("");

        return `
          <div style="padding: ${block.props.padding || "40px 20px"};">
            <div style="background-color: ${
              block.props.backgroundColor || "#ffffff"
            }; border-radius: 8px; padding: 24px; max-width: 600px; margin: 0 auto;">
              ${
                block.props.title
                  ? `<h3 style="text-align: center; margin: 0 0 24px 0; font-weight: bold;">${block.props.title}</h3>`
                  : ""
              }
              <form>
                ${formFields}
                <button type="submit" style="width: 100%; padding: 12px 24px; background-color: #1976d2; color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 16px;">
                  ${block.props.buttonText || "Envoyer"}
                </button>
              </form>
            </div>
          </div>
        `;

      default:
        return `<div>Type de bloc non reconnu: ${block.type}</div>`;
    }
  };

  const htmlContent = blocks.map(generateBlockHTML).join("\n");

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Généré</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
        }
        html {
            scroll-behavior: smooth;
        }
        /* Navigation fluide */
        a[href^="#"] {
            text-decoration: none;
            transition: color 0.3s ease;
        }
        a[href^="#"]:hover {
            opacity: 0.8;
        }
        /* Offset pour la navigation fixe */
        [id] {
            scroll-margin-top: 80px;
        }
        @media (max-width: 768px) {
            .container {
                padding: 0 16px;
            }
            [id] {
                scroll-margin-top: 60px;
            }
        }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>
  `.trim();
};

export const exportToJSON = (blocks, template) => {
  const exportData = {
    version: "1.0",
    template: {
      id: template?.id || "custom",
      name: template?.name || "Template Personnalisé",
      description:
        template?.description || "Template créé avec Template Builder",
    },
    blocks,
    exportedAt: new Date().toISOString(),
    metadata: {
      totalBlocks: blocks.length,
      blockTypes: [...new Set(blocks.map((block) => block.type))],
    },
  };

  return JSON.stringify(exportData, null, 2);
};

export const importFromJSON = (jsonString) => {
  try {
    const data = JSON.parse(jsonString);

    // Validation basique
    if (!data.blocks || !Array.isArray(data.blocks)) {
      throw new Error("Format JSON invalide: blocks manquants");
    }

    return {
      blocks: data.blocks,
      template: data.template,
      metadata: data.metadata,
    };
  } catch (error) {
    throw new Error(
      "Erreur lors de l'analyse du fichier JSON: " + error.message
    );
  }
};
