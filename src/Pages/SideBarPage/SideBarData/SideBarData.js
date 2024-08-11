import React, { useState } from 'react';
import classes from './SideBarData.module.scss';
import CustomInput from '../../../Components/CustomInput/CustomInput';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';

const SideBarData = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabData, setTabData] = useState([
    { id: 1, text: 'All' },
    { id: 2, text: 'Type 1 Items' },
    { id: 3, text: 'Type 2 Items' },
    { id: 4, text: 'Type 3 Items' },
  ]);

  const cardData = [
    {
      id: 1,
      type: 1,
      title1: 'ABC XM67559 002222',
      title: 'Project Name 1 Goes Here',
      totalHours: 240,
      myHours: 168,
      status: 'Approved',
      options: [
        'Germany - IN-GL015-02.33.224',
        'Germany - IN-GL016-01.29.166',
        'Germany - IN-GL017-01.01.75',
        'Germany - IN-GL018-73.73.889',
      ],
    },
    {
      id: 2,
      type: 1,
      title1: 'ABC XM67559 0022211',
      title: 'Project Name 2',
      totalHours: 168,
      myHours: 132,
      status: 'In Progress',
      options: [
        'France - IN-GL015-02.33.224',
        'France - IN-GL016-01.29.166',
        'France - IN-GL017-01.01.75',
        'France - IN-GL018-73.73.889',
      ],
    },
    {
      id: 3,
      type: 2,
      title1: 'ABC XM67559 0022223',
      title: 'Project Name 3',
      totalHours: 200,
      myHours: 150,
      status: 'Approved',
      options: [
        'Spain - IN-GL015-02.33.224',
        'Spain - IN-GL016-01.29.166',
        'Spain - IN-GL017-01.01.75',
        'Spain - IN-GL018-73.73.889',
      ],
    },
    {
      id: 4,
      type: 3,
      title1: 'ABC XM67559 0022244',
      title: 'Project Name 4',
      totalHours: 100,
      myHours: 50,
      status: 'In Progress',
      options: [
        'Italy - IN-GL015-02.33.224',
        'Italy - IN-GL016-01.29.166',
        'Italy - IN-GL017-01.01.75',
        'Italy - IN-GL018-73.73.889',
      ],
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const filteredCards =
    activeTab === 1
      ? cardData
      : cardData.filter((card) => card.type === activeTab - 1);

  return (
    <div className={classes['sidebardata-container']}>
      <div className={classes['sidebar-projects']}>
        <p className={classes['project-heading']}>My Projects</p>
        <div className={classes['sidebar-input']}>
          <CustomInput
            height="1.4rem"
            placeholder=" Search Here..."
            placeholderFontSize="0.5rem"
            width="140px"
            backgroundColor="#EFFFF9"
            inputColor="green"
          />
        </div>
      </div>
      <div className={classes['sidebar-buttons']}>
        <CustomButton
          borderColor="#4BC2A7"
          backgroundColor="#F4FDFE"
          borderRadius="20px"
          textColor="#4BC2A7"
          onClick={() => alert('Here is your Activity')}
        >
          Add Activity
        </CustomButton>
        <CustomButton
          borderColor="#4BC2A7"
          backgroundColor="#F4FDFE"
          borderRadius="20px"
          textColor="#4BC2A7"
          onClick={() => alert('Please Upload your CV!')}
        >
          Upload CV
        </CustomButton>
      </div>
      <div className={classes['sidebar-tabs']}>
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`${classes['tab']} ${
              activeTab === tab.id ? classes['active-tab'] : ''
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <div
              className={classes['text-count']}
              style={{
                backgroundColor: activeTab === tab.id ? '#17EBA0' : '#eaebea',
                marginLeft: '2rem',
              }}
            >
              {tab.id === 1
                ? cardData.length
                : cardData.filter((card) => card.type === tab.id - 1).length}
            </div>
            {tab.text}
          </div>
        ))}
      </div>
      <div>
        {filteredCards.map((data, index) => (
          <ProjectCard
            key={index}
            title={data.title}
            totalHours={data.totalHours}
            myHours={data.myHours}
            status={data.status}
            options={data.options}
            cardRadioHeading={data.cardRadioHeading}
            title1={data.title1}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBarData;
