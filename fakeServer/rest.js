import FakeRest from 'fakerest';
import fetchMock from 'fetch-mock';
import generateData from 'data-generator-retail';
import jsonServerProvider from 'ra-data-json-server';
import {savedData} from './data';

export default () => {
    const data = generateData({ serializeDate: true });

    //console.log(data)

    const restServer = new FakeRest.FetchServer('http://localhost:4000');
    if (window) {
        window.restServer = restServer; // give way to update data in the console
    }
    restServer.init(savedData);
    restServer.toggleLogging(); // logging is off by default, enable it
    fetchMock.mock('begin:http://localhost:4000', restServer.getHandler());
    return () => fetchMock.restore();
};


//tutaj trzeba zmienić dane