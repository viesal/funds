import React from 'react';
import { connect, ResolveThunks } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IApplicationState } from '../../store';
import { actionCreator } from '../../store/fund/actions';
import { IFundsFullState } from '../../store/fund/types';
import './FundEdit.less';

type Props = ResolveThunks<typeof actionCreator> & IFundsFullState & RouteComponentProps<{id: string}>;
interface IState {
    email: string;
    ammount: number;
}

class Component extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    public componentDidMount() {
        this.props.fetchFund(parseInt(this.props.match.params.id, 10));
    }

    public render() {
        const min = this.props.data.amount_min;
        const max = this.props.data.amount_max;
        return (
            <div className='fund-edit'>
                <h2>Пополнения фонда {this.props.data.name}</h2>
                <form name='fund-edit' onSubmit={this.handleSubmit}>
                    <div className='form-fields'>
                        <div>
                            <label htmlFor='email'>e-mail
                            <input
                                required
                                name='email'
                                type='email'
                                onChange={this.changeEmail}
                            />
                            </label>
                        </div>
                        <div>
                            <label htmlFor='ammount'>ammount
                            <input
                                required
                                name='ammount'
                                type='number'
                                min={min}
                                max={max}
                                onChange={this.changeAmmount}
                            />
                            </label>
                        </div>
                    </div>
                    <input className='submit' type='submit' value='Отправить' />
                </form>
            </div >
        );
    }

    public async handleSubmit(event: any) {
        event.preventDefault();
        await this.props.addAmmount({email: this.state.email, ammount: this.state.ammount});
        if (this.props.responseServer && this.props.responseServer.status) {
            this.props.history.push('/');
        }
      }

    private changeEmail = (e: any) => this.setState({email: e.target.value});
    private changeAmmount = (e: any) => this.setState({ammount: e.target.value});
}

export const FundEdit = connect(
    (state: IApplicationState) => ({
        ...state.fund,
    }),
    actionCreator,
)(Component);
