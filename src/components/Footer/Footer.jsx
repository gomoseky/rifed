import React, { Component } from "react";
import styles from "./Footer.module.scss";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            showText: true,
            currentTextIndex: 0,
        };
        this.texts = [
            `ЖДУ ДАМАГ ! ${this.props.username || '???'}`,
            "Coder js/React/html/py",
            "Мой тг:@gomoseky.",
            "Мой дискорд сервер CALIPSO:https://dsc.gg/calipsoclqn"
            // Добавьте сюда другие строки текста, которые вы хотите анимировать
        ];
        this.interval = null;
    }

    componentDidMount() {
        this.startTextAnimation();
    }

    componentDidUpdate(prevProps) {
        if (this.props.username !== prevProps.username) {
            // Update the first text with the new username
            this.texts[0] = `Я сигма!!!!!!! ${this.props.username || '???'}`;
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startTextAnimation = () => {
        this.interval = setInterval(() => {
            this.setState({ showText: false });

            setTimeout(() => {
                this.setState(prevState => ({
                    text: this.texts[prevState.currentTextIndex],
                    currentTextIndex: (prevState.currentTextIndex + 1) % this.texts.length,
                    showText: true,
                }));
            }, 500); // Duration of fade out
        }, 2500); // Total duration for each text display (2 seconds display + 0.5 second fade out)
    };

    render() {
        const { text, showText } = this.state;
        return (
            <footer className={styles.footer}>
                <p className={`${styles.text} ${showText ? '' : styles.fadeOut}`}>
                    <span>{text}</span>
                </p>
            </footer>
        );
    }
}

export default Footer;
