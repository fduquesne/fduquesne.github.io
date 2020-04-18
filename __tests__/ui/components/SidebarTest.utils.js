import { shallow } from 'enzyme';

import SideBarComponent from '../../../components/Sidebar';

let SideBarTest = () => {
    const testInfos = {
        username: 'test.login',
        name: 'test.name',
        bio: 'test.bio',
        company: 'test.company',
        location: 'test.location',
        email: 'test.email',
        avatar: 'test.avatar_url',
        github_url: 'test.github_url'
    };
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<SideBarComponent infos={testInfos} />);
    });

    it('should render four `.sidebar--informations` div', () => {
        expect(wrapper.find('div.sidebar--informations')).to.have.lengthOf(4);
    });

    it('should render the profile picture in the first `.sidebar--informations` div', () => {
        const image = wrapper.find('div.sidebar--informations').at(0).find('img');

        expect(image).to.have.lengthOf(1);
        expect(image.prop('src')).to.be.equals(testInfos.avatar);
    });

    it('should render the github informations in the second `.sidebar--informations` div', () => {
        const secondSection = wrapper.find('div.sidebar--informations').at(1);

        expect(secondSection.find('div.sidebar--information').at(0).text()).to.equal(testInfos.name);
        expect(secondSection.find('div.sidebar--information').at(1).text()).to.equal('@' + testInfos.username);
        expect(secondSection.find('div.sidebar--information').at(2).text()).to.equal(testInfos.bio);
    });

    it('should render the other informations in the third `.sidebar--informations` div', () => {
        const thirdSection = wrapper.find('div.sidebar--informations').at(2);

        const firstInfo = thirdSection.find('div.sidebar--information').at(0);
        const secondInfo = thirdSection.find('div.sidebar--information').at(1);
        const thirdInfo = thirdSection.find('div.sidebar--information').at(2);

        expect(firstInfo.find('div.sidebar--information-text').at(0).text()).to.equal(testInfos.email);
        expect(secondInfo.find('div.sidebar--information-text').at(0).text()).to.equal(testInfos.company);
        expect(thirdInfo.find('div.sidebar--information-text').at(0).text()).to.equal(testInfos.location);
    });

    it('should render links in the fourth `.sidebar--informations` div', () => {
        const fourthSection = wrapper.find('div.sidebar--informations').at(3);

        const firstLink = fourthSection.find('a').at(0);
        const secondLink = fourthSection.find('a').at(1);

        expect(firstLink.prop('href')).to.equal(testInfos.github_url);
        expect(secondLink.prop('href')).to.equal('https://www.linkedin.com/in/fduquesne/');
    });
};

export default SideBarTest;
