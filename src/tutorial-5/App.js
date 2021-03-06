import React from 'react';
import './App.css';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const App = () => {
    const [phrases, setPhrases] = React.useState([]);

    const adjectivesArr = [
        'абсолютный',
        'адский',
        'азартный',
        'активный',
        'ангельский',
        'астрономический',
        'баснословный',
        'безбожный',
        'безбрежный',
        'безвозвратный',
        'безграничный',
        'бездонный',
        'бездушный',
        'безжалостный',
        'замечательно',
        'замечательный',
        'записной',
        'запредельный',
        'заядлый',
        'звериный',
        'зверский',
        'зеленый',
        'злой',
        'злостный',
        'значительный',
        'неоспоримый',
        'неотразимый',
        'неоценимый',
        'непередаваемый',
    ];

    const nounsArr = [
        'лгун',
        'день',
        'конь',
        'олень',
        'человек',
        'программист',
        'ребёнок',
        'конец',
        'город',
        'дурак',
    ];

    const renderWord = (arrayText) => arrayText[Math.floor(Math.random() * arrayText.length)];

    const renderPhrase = () => {
        setPhrases((prev) => [
            ...prev,
            `${renderWord(adjectivesArr)} ${renderWord(adjectivesArr)} ${renderWord(nounsArr)}`,
        ]);
    };

    return (
        <div className="wrapper">
            {phrases.length ? <Phrase phrases={phrases} /> : <EmptyBlock />}
            <button onClick={renderPhrase} className="btn btn_generate">
                Сгенерировать
            </button>
            <button onClick={() => setPhrases([])} className="btn btn_clear">
                Очистить
            </button>
        </div>
    );
};

export default App;
