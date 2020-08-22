import React from 'react';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import App from '../src/App';
import AddIssueButton from '../src/components/AddIssueButton';

describe('App', () => {
  it('should render app without crashing', () => {
    mount(<App />);
  });
});
