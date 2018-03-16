import React, { createContext, Component } from 'react';

const TimeContext = createContext({
    time: new Date(),
});

export class TimeProvider extends Component {
    state = {
        time: new Date(),
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date(),
            })
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    render() {
        const { time } = this.state;
        return (
            <TimeContext.Provider value={{ time }}>
                {this.props.children}
            </TimeContext.Provider>
        );
    }
}

export const TimeConsumer = TimeContext.Consumer;
