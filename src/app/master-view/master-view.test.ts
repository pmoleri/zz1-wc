import { expect } from '@open-wc/testing';
import MasterView from './master-view.js';

describe('MasterView', () => {
  it('<app-master-view> is an instance of MasterView', async () => {
    const element = document.createElement('app-master-view');
    expect(element).to.be.instanceOf(MasterView);
  });
});
