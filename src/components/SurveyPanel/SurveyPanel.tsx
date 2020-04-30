import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import { ReactSurveyModel, StylesManager, Survey } from 'survey-react';
import 'survey-react/survey.css';
import { getSurveyData } from '../../surveyData';
import { svgData } from '../../svgData';
import { PreAttentiveSvgGenerator } from '../../svgGenerator/PreAttentiveSvgGenerator';
import { CompletedPage } from '../CompletedPage/CompletedPage';
import { SvgShowBox } from '../SvgShowBox/SvgShowBox';
import { TitlePage } from '../TitlePage/TitlePage';
import styles from './SurveyPanel.module.css';

export const SurveyPanel: React.FC = () => {
  const [survey, setSurvey] = useState(new ReactSurveyModel(getSurveyData()));
  const [displaySvg, setDisplaySvg] = useState(true);
  const [currentChartNo, setCurrentChartNo] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [svgGenerator, setSvgGenerator] = useState(
    new PreAttentiveSvgGenerator()
  );
  const [svg, setSvg] = useState<JSX.Element>();
  const [visibleTime, setVisibleTime] = useState(500);

  const numberOfSvgs = svgData.length;

  useEffect(() => {
    //set initial svg
    const feature = svgData[0].feature;
    const time = svgData[0].time;
    const additionalDistractors = svgData[0].additionalDistractors;
    setSvg(svgGenerator.generateSvg(9, feature, additionalDistractors));
    setVisibleTime(time);
    setDisplaySvg(true);

    //survey settings
    StylesManager.applyTheme('winter');
    let converter = new showdown.Converter();
    survey.onTextMarkdown.add(function (survey, options) {
      //convert the mardown text to html
      var str = converter.makeHtml(options.text);
      //remove root paragraphs <p></p>
      str = str.substring(3);
      str = str.substring(0, str.length - 4);
      //set html
      options.html = str;
    });
    return () => {};
  }, []);

  const handleNext = () => {
    const pageNo = survey.currentPageNo;
    if (pageNo >= numberOfSvgs - 1) {
      if (survey.isLastPage) setIsCompleted(true);
      else survey.nextPage();
    } else if (
      !displaySvg &&
      currentChartNo !== pageNo &&
      !survey.isCurrentPageHasErrors
    ) {
      const feature = svgData[pageNo + 1].feature;
      const time = svgData[pageNo + 1].time;
      const additionalDistractors = svgData[pageNo + 1].additionalDistractors;

      setSvg(svgGenerator.generateSvg(9, feature, additionalDistractors));
      setVisibleTime(time);
      setDisplaySvg(true);
    } else if (displaySvg) {
      setDisplaySvg(false);
      setCurrentChartNo(currentChartNo + 1);
      if (currentChartNo !== 0) survey.nextPage();
    }
  };

  const page = !hasStarted ? (
    <TitlePage onStart={() => setHasStarted(true)} />
  ) : isCompleted ? (
    <CompletedPage data={survey.data}></CompletedPage>
  ) : displaySvg ? (
    <div className={styles.svgShowBoxContainer}>
      <SvgShowBox visibleTime={visibleTime} onTimeOver={() => handleNext()}>
        {svg}
      </SvgShowBox>
    </div>
  ) : (
    <div className={styles.surveyContainer}>
      <Survey model={survey} />
      <input
        className={styles.nextButton}
        type="submit"
        value="Weiter"
        onClick={handleNext}
      />
    </div>
  );

  return <div className={styles.container}>{page}</div>;
};
