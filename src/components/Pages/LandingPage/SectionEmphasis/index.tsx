import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { iRecipe } from "../../../../contexts/RecipesContext";
import api from "../../../../services/api";
import { Heading3, Text1 } from "../../../../styles/typography";
import { SectionEmphasisStyled } from "./styles";

export const SectionEmphasis = () => {
  const [recommendation, setRecommendation] = useState<iRecipe[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<iRecipe[]>("recipes?id=19");
        setRecommendation(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      {recommendation && (
        <SectionEmphasisStyled>
          <div className="container">
            <Heading3 color="white">Recomendação dos desenvolvedores</Heading3>
            <img
              src={recommendation[0]?.images[0]?.value}
              alt={recommendation[0]?.name}
            />
            <div className="box-infos">
              <Text1 color="white">{recommendation[0]?.description}</Text1>
              <Link to={`/recipesPage/${recommendation[0]?.id}`}>
                Acessar receita
              </Link>
            </div>
          </div>
        </SectionEmphasisStyled>
      )}
    </>
  );
};
