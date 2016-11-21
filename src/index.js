import IQSelect from 'iq-select';
import ReactDOM from 'react-dom';
import React from 'react';
import countries from './countries';

function onSelectChange(newValue) {
    console.log(this.props.name, `new value: ${newValue}`);
}

const CountrySelect = (props) =>
    <IQSelect {...props}
              options={countries}
              label="Выберите страну"
              className="countrySelect"
              onChange={onSelectChange}/>;

const Example = () =>
    <div className="example">
        <CountrySelect name="countrySelect1"/>
        <CountrySelect name="countrySelect2" value="RU"/>
    </div>;

ReactDOM.render(<Example/>, document.getElementById('example'));
