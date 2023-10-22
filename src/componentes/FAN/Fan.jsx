import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Fan(){
    return(
            <div className='Fan-container'>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                    <Tab eventKey="home" title="Guia de FAN">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="profile" title="Itrackers">
                        gbertgr
                    </Tab>
                    <Tab eventKey="longer-tab" title="Trucazos">
                        Tab content for Loooonger Tab
                    </Tab>
                    <Tab eventKey="contact" title="Simulador" disabled>
                        Tab content for Contact
                    </Tab>
                    </Tabs>
          </div>
        )
    }
    
    
    
    export default Fan;