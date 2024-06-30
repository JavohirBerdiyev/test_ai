import React, { useState } from 'react';
import TabContent from './TabContent';
import './Tabs.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('P2P');

    const renderContent = () => {
        switch (activeTab) {
            case 'P2P':
                return <TabContent title="Мгновенные переводы с карты на карту" />;
            case 'Microloan':
                return <TabContent title="Микрозайм" />;
            case 'OnlineDeposit':
                return <TabContent title="Онлайн вклад" />;
            case 'Cashback':
                return <TabContent title="Кешбэк" />;
            default:
                return null;
        }
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                <div className={`tab ${activeTab === 'P2P' ? 'active' : ''}`} onClick={() => setActiveTab('P2P')}>P2P</div>
                <div className={`tab ${activeTab === 'Microloan' ? 'active' : ''}`} onClick={() => setActiveTab('Microloan')}>Микрозайм</div>
                <div className={`tab ${activeTab === 'OnlineDeposit' ? 'active' : ''}`} onClick={() => setActiveTab('OnlineDeposit')}>Онлайн вклад</div>
                <div className={`tab ${activeTab === 'Cashback' ? 'active' : ''}`} onClick={() => setActiveTab('Cashback')}>Кешбэк</div>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Tabs;
