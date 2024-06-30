import React from 'react';
import './TabContent.css';

const TabContent = ({ title }) => {
    return (
        <div className="content">
            <h2>{title}</h2>
            <p>Мгновенные переводы с карты на карту, гибкие вклады, онлайн микрозаймы, конвертация валют, платежи и кешбек до 2% в одном приложении.</p>
            <ul>
                <li>Переводы с карты на карту</li>
                <li>Переводы между картами HUMO и HUMO с комиссией 0%</li>
                <li>Переводы между картами HUMO и UZCARD с комиссией 0,25%</li>
                <li>Переводы между картами UZCARD и HUMO с комиссией 0,4%</li>
                <li>Перевод с карты Trastbank UZCARD и на HUMO других банков РУз. с комиссией от 0,25</li>
                <li>Переводы между картами UZCARD и UZCARD с комиссией от 0,4%</li>
                <li>Перевод с карты Trastbank UZCARD и на UZCARD других банков РУз. с комиссией от 0,25</li>
            </ul>
            <button className="instruction-button">Видео инструкция</button>
        </div>
    );
};

export default TabContent;
