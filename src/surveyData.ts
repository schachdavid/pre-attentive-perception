import { svgData } from './svgData';

export const getSurveyData = () => {
  let data: any = {
    showProgressBar: 'top',
    locale: 'de',
    showNavigationButtons: false,
  };

  data.pages = svgData.map((svg, index) => {
    return {
      questions: [
        {
          type: 'radiogroup',
          name: index.toString(),
          title:
            index === 0
              ? 'Testfrage: Tanzt ein einzelnes Objekt aus der Reihe?'
              : 'Tanzt ein einzelnes Objekt aus der Reihe?',
          choices: ['Ja', 'Nein'],
          isRequired: true,
        },
      ],
    };
  });

  return data;
};
