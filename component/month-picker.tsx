import React from 'react';
import { monthByNumber_EN, monthByNumber_TH,  } from './utils';

export interface IMonthPicker {
  /** Required. Callback for month change: Format: MM */
  onMonthChange: (month: number) => void;
  /** Default year: Format: MM */
  selectedMonth?: number;
  /** Placeholder for <select/> input */
  placeholder?: string;
  /** ClassName */
  className?: {
    select?: string;
    option?: string;
  };
  /** Styles */
  styles?: {
    select?: React.CSSProperties;
    option?: React.CSSProperties;
  };
  language?: 'EN' | 'CN' | 'BM';
  arrayMonthList?: string[];
}

const MonthPicker: React.FC<IMonthPicker> = ({
  selectedMonth,
  onMonthChange,
  // placeholder = 'เดือน',
  className,
  styles,
  language = 'TH',
  arrayMonthList,
}) => {
  const renderMonthOptions = () => {
    let months: string[] = [];
    let month = 12;

    let monthList;

    if (arrayMonthList && arrayMonthList.length === 12) {
      monthList = arrayMonthList;
    } else {
      switch (language) {
        case 'EN':
          monthList = monthByNumber_EN;
          break;
        case 'TH':
          monthList = monthByNumber_TH;
          break;
      
        default:
          monthList = monthByNumber_TH;
          break;
      }
    }

    for (let i = 0; i <= month; ++i) {
      months.push(monthList[i]);
    }

    const monthOptions: JSX.Element[] = [];
    monthOptions.push(
      <option
        value={-1}
        key={-1}
        disabled
        selected
        className={className?.option}
        style={styles?.option}
      >
        {/* {placeholder ? placeholder : ''} */}
      </option>
    );
    months.forEach((month, index) => {
      monthOptions.push(
        <option
          value={index + 1}
          key={index}
          className={className?.option}
          style={styles?.option}
        >
          {month}
        </option>
      );
    });
    return monthOptions;
  };

  return (
    <div className="text-black text-center">
    <select
      className={className?.select}
      style={styles?.select}
      onChange={(e: any) => {
        onMonthChange(e.target.value);
      }}
      defaultValue={selectedMonth}
    >
      {renderMonthOptions()}
    </select>
    </div>
  );
};

export default MonthPicker;