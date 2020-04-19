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
        expect(image.prop('src')).to.equal(testInfos.avatar);
    });

    it('should render the github informations in the second `.sidebar--informations` div', () => {
        const secondSection = wrapper.find('div.sidebar--informations').at(1);

        const nameSection = secondSection.find('div.sidebar--information').at(0);
        const usernameSection = secondSection.find('div.sidebar--information').at(1);
        const bioSection = secondSection.find('div.sidebar--information').at(2);

        expect(nameSection.text()).to.equal(testInfos.name);
        expect(usernameSection.text()).to.equal('@' + testInfos.username);
        expect(bioSection.text()).to.equal(testInfos.bio);
    });

    it('should render the other informations in the third `.sidebar--informations` div', () => {
        const thirdSection = wrapper.find('div.sidebar--informations').at(2);

        const firstInfo = thirdSection.find('div.sidebar--information').at(0).find('div.sidebar--information-text').at(0);
        const secondInfo = thirdSection.find('div.sidebar--information').at(1).find('div.sidebar--information-text').at(0);
        const thirdInfo = thirdSection.find('div.sidebar--information').at(2).find('div.sidebar--information-text').at(0);

        expect(firstInfo.text()).to.equal(testInfos.email);
        expect(secondInfo.text()).to.equal(testInfos.company);
        expect(thirdInfo.text()).to.equal(testInfos.location);
    });

    it('should render links in the fourth `.sidebar--informations` div', () => {
        const fourthSection = wrapper.find('div.sidebar--informations').at(3);

        const firstLink = fourthSection.find('a').at(0);
        const secondLink = fourthSection.find('a').at(1);

        expect(firstLink.prop('href')).to.equal(testInfos.github_url);
        expect(secondLink.prop('href')).to.equal('https://www.linkedin.com/in/fduquesne/');
    });

    it('should render the footer', () => {
        const footer = wrapper.find('div#footer');

        expect(footer).to.have.lengthOf(1);

        const copyrightSection = footer.find('div').at(1);
        const developSection = footer.find('div').at(2);
        const inspirationSection = footer.find('div').at(3);

        expect(copyrightSection.text()).to.equal('Copyright © 2020');
        expect(developSection.text()).to.equal('🚀Developed with Next.js by Florian Duquesne');
        expect(inspirationSection.text()).to.equal('🎨UI inspired by imfunniee with Neumorphism trend');
    });
};

export default SideBarTest;
