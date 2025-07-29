/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import "./HubSpotForm.css"; // Importaremos o CSS de personalização aqui

declare global {
  interface Window {
    hbspt?: any;
  }
}

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({
  portalId,
  formId,
  region,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";

    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // Garante que a função hbspt exista antes de usá-la
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          // Define um elemento de destino único para este formulário
          target: `#hubspotForm-${formId}`,
        });
      }
    });

    // Função de limpeza: remove o script quando o componente é desmontado
    // para evitar vazamentos de memória ou duplicação de scripts.
    return () => {
      const formElement = document.getElementById(`hubspotForm-${formId}`);
      if (formElement) {
        formElement.innerHTML = "";
      }
      // Opcionalmente, remover o script se não for mais necessário em nenhum lugar
      // document.body.removeChild(script);
    };
  }, [portalId, formId, region]); // O hook é re-executado se algum desses IDs mudar

  return (
    <div className="hubspot-form-container">
      {/* Este div é o alvo onde o formulário da HubSpot será renderizado */}
      <div id={`hubspotForm-${formId}`}></div>
    </div>
  );
};

export default HubSpotForm;
