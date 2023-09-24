import { Web3Button } from '@web3modal/react';

export default function Login() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

            <div>
                <h4>
                    Look for our list of galleries, if you’re a gallery or artist with a wallet you can be added or view the whole list of artists and galleries
                    <br/><br/>
                    Also checkbox mark the ones you have visited.
                </h4>
            </div>
            <Web3Button icon='show' label='Connect Wallet'/>

        </div>
    );
}