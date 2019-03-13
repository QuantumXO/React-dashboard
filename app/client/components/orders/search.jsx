
'use strict';

import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'

import FilterItemCloseBtn from './filterItemCloseBtn'

class Search extends PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            upd: false,
            //searchFields: this.props.searchFields,
        };

        this.getWrapRef = React.createRef();
        this.getInputRef = React.createRef();

        this.search = this.search.bind(this);
        this.fieldHide = this.fieldHide.bind(this);

    }

    componentDidMount(){

        // Mb need store for that and local state like "someFieldIsActive: 1/0"
        //

        const wrap = this.getWrapRef.current;
        const input = this.getInputRef.current;

        document.addEventListener('click', function (e) {

            const target = e.target;

            console.log('e.target: ', target);

            if(target.classList.contains('orders__search__field')){

                const fieldName = target.getAttribute('data-field'); // like: 'customer', 'status'

                target.parentNode.classList.add('active');

                console.log('fieldName: ', fieldName);
                //wrap.classList.add('active');

            }else if(){
                wrap.classList.remove('active');
            }

           /* if(e.target == input){
                wrap.classList.add('active');

            }else if(input.getAttribute('data-field') == 'search' && !input.value){
                wrap.classList.remove('active');
            }*/


            if(0 == 2){
                ///
            }

        }, false);

    }

    search(e){

        this.props.searchFunc(e.target.value.toLowerCase());

    }

    componentWillReceiveProps(nextProps){
        console.log("search.jsx ->componentWillReceiveProps()");
        this.setState({upd: !this.state.upd})
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
                            ref={item.name == 'search' && this.getWrapRef}
                            className="orders__search__inner"
                            data-key={item.name}
                            data-id={item.id}
                        >
                            <label>{item.title}</label>
                            <input
                                type="text"
                                id={'order' + item.name}
                                onChange={this.search}
                                data-field={item.name}
                                ref={item.name == 'search' &&  this.getInputRef}
                                className="orders__search__field"
                            />

                            {item.name !== 'search' ? <FilterItemCloseBtn classes='hide__filter' close={item.name} fieldHideFunc={this.fieldHide} /> : '' }

                        </div>
                    ) : ''}

                </React.Fragment>
            )

        );


        return(

            <div className="orders_search__wrap clearfix">

                {fields}

            </div>
        )
    }
}

export default Search

