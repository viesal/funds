import React from 'react';
import { connect, ResolveThunks } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IApplicationState } from '../../store';
import { actionCreator } from '../../store/fundsList/actions';
import { IFundsShortState } from '../../store/fundsList/types';
import { FundShort } from '../Fund/FundShort';
import './FundsList.less';

type Props = ResolveThunks<typeof actionCreator> & IFundsShortState & RouteComponentProps<{}>;

class Component extends React.Component<Props> {
    public componentDidMount() {
        this.props.fetchListFunds();
    }
    public render() {
        return (
            <div className='funds-list'>
                {this.props.data.map((item, i) =>
                    <FundShort key={i} fund={item} />,
                )}
            </div>
        );
    }
}

export const FundsList = connect(
    (state: IApplicationState) => ({
        ...state.listFunds,
    }),
    actionCreator,
)(Component);
