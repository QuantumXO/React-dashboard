'use strict';

import React, {PureComponent} from 'react'
//import ReactDOM from 'react-dom'

import FilterItemCloseBtn from './filterItemCloseBtn'

class Search extends PureComponent{

    constructor(props) {
        super(props);

        this.getInputRef = [];

        this.state = {
            upd: false,
            fieldsRef: this.getInputRef || [],
        };

        this.search = this.search.bind(this);
        this.fieldHide = this.fieldHide.bind(this);

        this.handleStateOfElements = this.handleStateOfElements.bind(this);

    }

    componentDidMount(){
        document.body.addEventListener('click', this.handleStateOfElements, false);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleStateOfElements, false);
    }

    handleStateOfElements(e){

        const target = e.target;
        
        if(target.classList.contains('orders__search__field')){

            target.parentNode.classList.add('active');

        }else{

            this.state.fieldsRef.forEach(function (item, i) {

                if(item && !item.value){
                    item.parentNode.classList.remove('active');
                }
            });

        }

    }

    search(e){

        const target = e.target;

        this.props.searchFunc(target.value.toLowerCase(), target.getAttribute('data-field')); // value, field name
    }

    componentWillReceiveProps(nextProps){
        this.setState({upd: !this.state.upd}) // just for update component
    }

    fieldHide(e){

        const closeFieldName = e.target.getAttribute('data-close');

        this.props.fieldHandleStateFunc(
            {
                name: closeFieldName,
                show: false
            }
        );

        this.setState({upd: !this.state.upd})
    }

    render() {

        const fields = this.props.searchFields.map((item, i) =>
            (
                <React.Fragment key={i}>
                    {item.show || item.name == 'search'  ? (
                        <div
                            className="orders__search__inner"
                            data-key={item.name}
                            data-id={item.id}
                        >
                            <label>{item.title}</label>
                            <input
                                type="text"
                                //id={item.name}
                                onChange={this.search}
                                data-field={item.name}
                                data-field-id={item.id}
                                //ref={item.name == 'search' && this.getInputRef}
                                ref={node => this.getInputRef[item.id] = node}
                                className="orders__search__field"
                            />

                            {item.name !== 'search' && <FilterItemCloseBtn classes='hide__filter' close={item.name} fieldHideFunc={this.fieldHide} /> }

                        </div>
                    ) : null}

                </React.Fragment>
            )

        );

        return(
            <div className="orders__search__wrap clearfix">
                {fields}
            </div>
        )
    }
}

export default Search

