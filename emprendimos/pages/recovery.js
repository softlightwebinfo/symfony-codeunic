import React from 'react'
import {connect} from 'react-redux';
import Template from "../components/containers/Template";
import page from "../components/hocs/page";
import cookies from 'next-cookies';
import {parseCookies} from 'nookies'
import settings from "../settings/config";
import Centrar from "../components/framework/Centrar";
import Theme from "../components/framework/Theme";
import Router from '../routes';
import Recovery from "../components/layout/Recovery/Recovery";

class Index extends React.Component {
    static async getInitialProps(ctx) {
        console.log(ctx.query.token);
        const {reduxStore, req, query, res} = ctx;
        parseCookies(ctx);
        var data = cookies(ctx).query;
        if (!ctx.query.query) {
            data = '';
        }
        if (reduxStore.getState().user.login) {
            if (reduxStore.getState().user.user) {
                if (res) {
                    res.writeHead(302, {
                        Location: '/panel'
                    });
                    res.end()
                } else {
                    Router.pushRoute('panel');
                }
            }
        }
        // reduxStore.dispatch(await fetch_profesionales_tarjetas(query));
        return {
            ...reduxStore.getState(),
            isRecovery: !!ctx.query.token,
        };
    }

    constructor(props) {
        super(props);
        this.state = {login: false}
    }

    async componentDidMount() {
        const {dispatch} = this.props;
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(next) {
        if (next.user.login && next.user.user && !this.state.login) {
            this.setState({
                login: true
            });
            Router.pushRoute('panel');
        }
    }

    render() {
        const {token} = this.props.router.query;
        const isRecovery = !!token;
        return (
            <Template
                title={`Inicia sesión en tu cuenta | ${settings.appName}`}
                description={settings.description}
            >
                <Theme
                    overlay
                    overlayColor="rgba(24,28,33,.9)"
                    image="/static/images/loginimage.jpg"
                >
                    <Centrar>
                        <Recovery token={token} isRecovery={isRecovery}/>
                    </Centrar>
                </Theme>
            </Template>
        )
    }
}

// export default connect(state => state)(Index);
export default page(connect(state => state)(Index));
