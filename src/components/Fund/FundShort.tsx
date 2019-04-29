import React from 'react';
import { Link } from 'react-router-dom';
import { IFundShort } from '../../store/fundsList/types';
import './FundShort.less';

interface IProps {
    fund: IFundShort;
}

export const FundShort: React.FC<IProps> = (props) => (
    <>
    <Link to={`/${props.fund.id}`} className='fund-short'>
        <img
            src={props.fund.image}
            alt={props.fund.name}
        />
        <div className='fund-short-desc'>
            <h3>{props.fund.name}</h3>
            <div>{props.fund.description_short}</div>
        </div>
    </Link>
    </>
);
