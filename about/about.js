import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useTranslate, useLocale, useSetLocale, Title } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
});

const About = () => {
    return (
        <Card>
            <Title title={'About the platform'} />
            <CardContent>
            Dear RPA Developers,
            I'm created RPA Credit Bank System and I'm giving it to the RPA community, so every one can use it to learn, practice, build proof of concept or RPA portfolio. The platfrom is free to use
            and falls under MIT license. I have built this platform, partialy because we were running RPA PoC at the place where I work, but aslo because for very long time, I was looking for a website where I can build 
            examples or simply practice my RPA skills. I found other similar web sites as too simple and rarely they reflect complexity of real life business processes.

            As I was not able to find it, I decided to build it my self :)

            The platform was built having in mind Credit Request Processing process of imagenary RPA Credit Bank. In Process Documentation subpage you can find detailed Process Definition Document that describes the process which you
            can automate using this web application. But of course, please don't feel constrained with that documentation. The platform is big enough and it contains so much data, 
            that you can create your own scenarios or change existing processes to your needs. The web page was built using mostly React-Admin framework, so it reflect complexity of modern web based applications. 
            The web application is not linked with external data source. I'm using Fakerest server to simulate database, thus if you refresh the website or close and re-open it 
            all data will be restored to initials state and your progress will be lost. Such approach allows me to host this web site at relativelly low cost using Google Cloud Platform, but also you don't haven'tax_rate
            restart data every time you want to run an end-to-end automation ;)
            
            I hope you will like the platform and find it useful. I'm also happy to hear your feedback or suggestions. 

            All the code that stands behind the website is available on my GitHub:

            I also, will be happy, if you will vist my web site and YouTube Channel, you can find links below.

            Best Regards,

            Krzysztof Karaszewski

            P.S. Credits to Marmelab team for creating React-Admin framework, which greatly reduced the time required to build this platform. https://marmelab.com/react-admin/
            </CardContent>
        </Card>
    );
};

export default About;
