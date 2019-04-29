import React from 'react';
import { connect, ResolveThunks } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { IApplicationState } from '../../store';
import { actionCreator } from '../../store/fund/actions';
import { IFundsFullState } from '../../store/fund/types';
import './FundFull.less';

type Props = ResolveThunks<typeof actionCreator> & IFundsFullState & RouteComponentProps<{id: string}>;

class Component extends React.Component<Props> {
    public componentDidMount() {
        this.props.fetchFund(parseInt(this.props.match.params.id, 10));
    }
    public render() {
        return (
            <div className='fund-full'>
                <h2>{this.props.data.name}</h2>
                <span>Сумма пополнения от {this.props.data.amount_min} до {this.props.data.amount_max}</span>
                <div>{this.props.data.description_full}</div>
                <Link to={`fund-edit/${this.props.data.id}`}>Пополнить фонд</Link>
            </div>
        );
    }
}

export const FundFull = connect(
    (state: IApplicationState) => ({
        ...state.fund,
    }),
    actionCreator,
)(Component);
