import React, {Component} from "react";
import { connect, Connect } from "react-redux";
import { bindActionCreators } from "redux";
import {reduxForm, Field, formValueSelector} from "redux-form";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";
import If from "../common/operador/if";

class BillingCycleForm extends Component{

    calculateSummary(){
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(c => +c.value || 0).reduce(sum)
        }
    }

    render(){
        const {handleSubmit, readOnly, credits, debts, salvar} = this.props
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        name="name" 
                        component={labelAndInput} 
                        readOnly={readOnly}
                        label="Nome" 
                        cols="12 4" 
                        placeholder="Informe o Nome" />
                    <Field 
                        name="month" 
                        component={labelAndInput} 
                        type="number" 
                        readOnly={readOnly}
                        label="Mês" 
                        cols="12 4" 
                        placeholder="Informe o mês" />
                    <Field 
                        name="year" 
                        component={labelAndInput} 
                        type="number" 
                        readOnly={readOnly}
                        label="Ano" 
                        cols="12 4" 
                        placeholder="Informe o ano" />
                    <ItemList 
                        cols="12 6" 
                        list={credits} 
                        readOnly={readOnly}
                        field="credits"
                        legend="Créditos" />
                    <ItemList 
                        cols="12 6" 
                        list={debts} 
                        readOnly={readOnly}
                        field="debts"
                        legend="Débitos"
                        showStatus={true} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                </div>
                <div className="box-footer">
                    {/* <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button> */}
                    <If test={!this.props.readOnly}>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </If>
                    <button type="button" className="btn btn-danger" onClick={this.props.init}>Voltar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)