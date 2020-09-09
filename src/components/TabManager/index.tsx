import React from 'react';

import { Container } from './styles';

interface TabProps {
  tabs: Record<string, any>[];
  activeTab: number;
  handleTab: React.Dispatch<React.SetStateAction<number>>;
}

const Tab: React.FC<TabProps> = ({ tabs, activeTab, handleTab }) => {
  return (
    <Container>
      <div className="tab-manager">
        {tabs.map(({ nav, icon, value }) => (
          // eslint-disable-next-line
          <li
            key={value}
            className={`tab ${value === activeTab ? `selected` : ''}`}
            onClick={() => {
              handleTab(value);
            }}
          >
            {icon}
            <span>{nav}</span>
          </li>
        ))}
      </div>
    </Container>
  );
};
export default Tab;
