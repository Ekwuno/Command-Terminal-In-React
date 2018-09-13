import React,{Component}from 'react'
import Terminal from 'terminal-in-react'

class TerminalApp extends Component {
    state = {
        name : '',
    }
    showMsg = () => 'Hello Obinna'

    handleChange (e) {
        this.setState ({
            name : e.target.name 
        })
    }
    render(){
        return (
            <div  style={{  display: "flex", justifyContent: "center",  alignItems: "center", height: "100vh"  }}>
              <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commands={{
                  'open google': () => window.open('https://www.google.com/', '_blank'),
                  hello: this.showMsg,
                  popup: () => alert('Created a teminal')
                }}
                descriptions={{
                  'open-google': 'opens google.com',
                  showmsg: 'shows a message',
                  alert: 'alert', popup: 'alert'
                }}
                msg=' Hello! My name is Bill and I am a bot.'
              />
            </div>
          );
    }
}

export default TerminalApp 