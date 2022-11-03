import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    color: var(--Color-gray-3);
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 33px 12px ;
`

export const Form = styled.form`
    width: 100%;
    max-width: 970px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--Color-brand-2);
    padding: 30px 13px;
    border-radius: 16px;

    @media screen and (min-width: 708px) {
        
        padding: 40px 16px;
    }
`
export const FormContainer = styled.div`
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const InputDefault = styled.input`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: white;
    font-size: 20px;
    font-weight: 400;
    color: #a4a4a4;
`
export const InputSmall = styled.input`
    width: 100%;
    max-width: 95px;
    height: 60px;
    padding: 0 16px;
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: white;
    font-size: 20px;
    font-weight: 400;
    color: #a4a4a4;
`

export const SelectDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const SelectDefault = styled.select`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: white;
    font-size: 20px;
    font-weight: 400;
    color: #a4a4a4;
    border-right: 16px solid transparent;
`
export const OptionDefault = styled.option`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: white;
    font-size: 20px;
  font-weight: 400;

`
export const PrepareTime = styled.div`
    min-height: 180px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    padding: 16px 23px;
    background-color: var(--Color-brand-1);
    gap: 26px;

    @media screen and (min-width: 708px) {
        width: 50%;
        padding: 40px 16px;
    }
`
export const PrepareTimeInput = styled.input`
    border: none;
    outline: none;
    height: 100%;
    background-color: transparent;
`

export const PrepareTimeInputDiv = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 16px;
    gap: 10px;
`
export const Portions = styled.div`
    min-height: 180px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    background-color: var(--Color-gray-0);
    padding: 16px 23px;
    gap: 26px;

    @media screen and (min-width: 708px) {
        width: 50%;
        padding: 40px 16px;
    }
`

export const PortionInputDiv = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 16px;
    gap: 10px;
    border: 2px solid var(--Color-brand-1);

`

export const TimeAndPortion = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;


    @media screen and (min-width: 708px) {
        flex-direction: row;
    }
`

export const ButtonDefault = styled.button`
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center; 
`

export const ButtonSubmit = styled.button`
    width: 100%;
    height: 76px;
    border-radius: 16px;
    background-color: var(--Color-brand-1);
    border: none;
`

export const TitleDiv = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`

export const RecipeNameDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
`

export const IngredientDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;  

`

export const IngredientInputDiv = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`

export const StepsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`