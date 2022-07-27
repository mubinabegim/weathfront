import React, { Component } from 'react'
import darkLogo from '../src/images/logoDark.svg'
import lightLogo from '../src/images/logoLight.svg'

import Childhood from '../src/images/childhood.jpg'
import NerdWallet from '../src/images/nerdWallet.svg'
import Investopedia from '../src/images/investopedia.svg'
import frame from '../src/images/Frame.svg'
import Card from '../src/images/card-visa.PNG'
import average from '../src/images/average.jpg'
import Plant from '../src/images/plant.jpg'
import wsj from '../src/images/wsj.svg'
import bloomberg from '../src/images/blomberg.jpg'
import newyork from '../src/images/theNewTimes.svg'
import reuters from '../src/images/reuters.svg'
import shineLogo from '../src/images/cnbc.svg'


export default class App extends Component {
  render() {
    return (
      <>
        <div className='wrapper'>
          {/* Navbar */}
          <nav>
            <div className="logo">
              <img src={darkLogo} alt="darkLogo" />
            </div>
            <ul className="nav-ul">
              <li>
                <a href="#invest" className="nav-link">Invest</a>
              </li>
              <li>
                <a href="#cash" className="nav-link">Cash</a>
              </li>
              <li>
                <a href="#borrow" className="nav-link">Borrow</a>
              </li>
              <li>
                <a href="#blog" className="nav-link">Blog</a>
              </li>
            </ul>
            <div className="btns-group">
              <button className="logIn">Log in</button>
              <button className="get-started">Get started</button>
            </div>
          </nav>
          {/* Header */}
          <div className='make-wealth'>
            <div className="wealth-img">
              <img src={Childhood} alt="childhood" className='childhood' />
            </div>
            <div className="wealth-text  main-color">
              <div>
                <p className='large-text'>Make wealth <br /> your own.</p>
                <p className="small-text">Personalized, Automated, Effortless <br /> Investing and Savings.</p>
                <button className="get-started">Get started</button>
              </div>
            </div>

          </div>
          <div className="names-group main-color">
            <div className="names-item">
              <div>
                <img src={NerdWallet} alt="nerdWallet" />

              </div>
              <p className='main-color' style={{ fontSize: '12px' }}>
                Best Robo-advisor, 2019 <sup>1</sup>
                <br />
                Best Cash Management App, 2020 <sup>1</sup>
              </p>
            </div>
            <div className="names-item">
              <div>
                <img src={Investopedia} alt="nerdWallet" />
              </div>
              <p className='main-color smallest' style={{ fontSize: '12px' }}>
                Best Robo-advisor, 2019 <sup>1</sup>
              </p>
            </div>
            <div className="names-item">
              <p className="large-name">450K+</p>
              <p className='smallest' style={{ fontSize: '12px' }}>Trusted clients</p>
            </div>
            <div className="names-item">
              <p className="large-name">$26B+</p>
              <p className='smallest' style={{ fontSize: '12px' }}>Trusted clients</p>
            </div>

            <div className="names-item">
              <p className="large-name">4.9 <sub><i className='bi bi-star-fill'></i></sub></p>
              <p className='smallest' style={{ fontSize: '12px' }}>Apple App Store <sup>2</sup></p>
            </div>
            <div className="names-item">
              <p className="large-name">4.5 <sub><i className='bi bi-star-fill'></i></sub></p>
              <p className='smallest' style={{ fontSize: '12px' }}>Google Play Store <sup>2</sup></p>
            </div>
          </div>
          <div className="invest">
            <div className='main-color'>
              <p className='large-text'>Investing isn’t easy. We just make it feel that way.</p>
              <p className="small-text">Let us customize a portfolio just for you or build it yourself, and our powerful automation will make the most of your investments, optimizing your performance and helping lower your taxes.</p>
              <div className="link-group">
                <button className="get-started">Start investing</button>
                <a href="#home" className='learnMore'>Learn more</a>
              </div>
            </div>
            <div className="dark-phone">
              <div className='note'>
                <p className="flex-box">
                  <img src={frame} alt="frame" />
                  <span>new</span>
                </p>
                <p>
                  We saved you $78.11 on your taxes.
                </p>
              </div>
              <div className='note'>
                <p className="flex-box">
                  <img src={frame} alt="frame" />
                  <span>new</span>
                </p>
                <p>
                  We automatically invested your $500 deposit.
                </p>
              </div>
            </div>
          </div>
          <div className="light-phone">
            <div className="light-screen">
              <img src={Card} alt="card" />

            </div>
            <div className='main-color blue-flex'>

              <div>
                <p className='large-text'>Everyday cash, designed to build long-term wealth.</p>
                <p className="small-text">Our Cash account, offered with Green Dot Bank, lets you automate your savings, so you can pay bills, withdraw from 19,000+ ATMs, and invest your extra cash in seconds to keep building your future.</p>
                <div className="link-group">
                  <button className="get-started">Start saving</button>
                  <a href="#home" className='learnMore'>Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relax">
          <div className='blue-flex'>
            <div>
              <p className='large-text'>Saving and investing. All while you're relaxing.</p>
              <p className="small-text">Tell us what you're saving for, and we'll automatically set aside extra cash to hit your goals. And since we connect with all your accounts, you only need one app to watch your wealth grow.</p>
            </div>
          </div>
          <div className="relax-img">
            <img src={average} alt="average" />
          </div>
        </div>
        <div className="cards-group">
          <div className="card">
            <div className="card-title">Testimonial</div>
            <div className="card-body">
              <strong> It's the single best </strong> resource for both investing, managing retirement and seeing my entire financial picture.
            </div>
            <div className="card-footer">
              <span>Joshua B</span>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Testimonial</div>
            <div className="card-body">
              <strong> Wealthfront </strong>is the first thing in my life that actually motivated me to save money.

            </div>
            <div className="card-footer">
              <span>Joshua B</span>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Testimonial</div>
            <div className="card-body">
              <strong>It’s automatic,</strong> and I’m lazy.

            </div>
            <div className="card-footer3">
              <span>Joshua B</span>
            </div>
          </div>
        </div>
        <div className="plant">
          <div className="plant-img">
            <img src={Plant} alt="plant" />
          </div>
          <p className="plant-text main-color">
            Over <strong>450,000 </strong> people are already using Wealthfront to earn more and worry less
          </p>
          <button className="get-started">Get started</button>
          <p className='main-color' style={{ fontSize: '13px', margin: '5rem 0 0 0' }}>As featured in</p>
        </div>
        <div className="logos-group wrapper">
          <img src={wsj} alt="wsj" />
          <img src={bloomberg} alt="wsj" />
          <img src={newyork} alt="wsj" />
          <img src={reuters} alt="wsj" />
          <img src={shineLogo} alt="wsj" />
        </div>
        <div className='footer wrapper'>
          <div className="logo-link">
            <div className="logo">
              <img src={lightLogo} alt="darkLogo" />
            </div>
            <div className="ul-group">
              <ul>
                <li>Careers</li>
                <li>Help center</li>
                <li>Homeownership</li>
              </ul>
              <ul>
                <li>Legal</li>
                <li>Blog</li>
                <li>College</li>
              </ul>
              <ul>
                <li>Methodology</li>
                <li>Planning</li>
                <li>Our PhD Team</li>
              </ul> 
              <ul>
                <li>Contact</li>
                <li>Retirement</li>
                <li>Back to top</li>
              </ul>  
            </div>
          </div>
          <hr style={{color:"white"}} />
          <div className="footer-texts">
            <p style={{margin:'2rem 0 1rem 0' }}>Testimonials were given by clients of both Wealthfront Advisers and Wealthfront Brokerage. There is no guarantee that clients will have similar experiences or success.</p>
            <p>Nerdwallet and Investopedia (the “Endorsers”) receive cash compensation for referring potential clients to Wealthfront Advisers, LLC (“Wealthfront Advisers”) via advertisements placed on their respective websites. The Endorsers and Wealthfront Advisers are not associated with one another and have no formal relationship outside of this arrangement. Nerdwallet’s opinions are their own. Their ratings are determined by their editorial team. The scoring formula for online brokers and robo-advisors takes into account over 15 factors, including account fees and minimums, investment choices, customer support and mobile app capabilities. Nerdwallet ranking as of June 2021. Wealthfront provides</p>
            <p className='flex-text'>
              <span>in connection with obtaining this ranking.</span>
              <span>methodology and review process &nbsp; &nbsp; . Investopedia ranking as of June 2021. Wealthfront provided &nbsp;&nbsp; cash compensation</span>
            </p>
            <p style={{margin:'2rem 0 1rem 0' }}>Apple App Store and Google Play Store ratings based on user ratings from February 2014 (Apple) and December 2015 (Google) through June 2021. Ratings compiled by Apple, Inc., and Google, Inc., who receive compensation for hosting our app.</p>
            <p>
            By using this website, you understand the information being presented is provided for informational purposes only and agree to our &nbsp; &nbsp; Terms of Use and Privacy Policy
            . Wealthfront Advisers relies on information from various sources believed to be reliable, including clients and third parties, but cannot guarantee the accuracy and completeness of that information. Nothing in this communication should be construed as an offer, recommendation, or solicitation to buy or sell any security. Additionally, Wealthfront Advisers or its affiliates do not provide tax advice and investors are encouraged to consult with their personal tax advisors.
            </p>
            <p style={{margin:'1rem 0'}}>We’ve partnered with Green Dot Bank, Member FDIC, to bring you checking features.</p>
            <p>Checking features for the Cash Account are subject to identity verification by Green Dot Bank. Debit Card is optional and must be requested. Wealthfront Cash Account Visa® Debit Card is issued by Green Dot Bank, Member FDIC, pursuant to a license from Visa U.S.A. Inc. Visa is a registered trademark of Visa International Service Association. Green Dot Bank operates under the following registered trade names: GO2bank, GoBank, Green Dot Bank and Bonneville Bank. All of these registered trade names are used by, and refer to, a single FDIC-insured bank, Green Dot Bank. Deposits under any of these trade names are deposits with Green Dot Bank and are aggregated for deposit insurance coverage. Wealthfront products and services are not provided by Green Dot Bank. Green Dot is a registered trademark of Green Dot Corporation. ©2021 Green Dot Corporation. All rights reserved.</p>
            <p style={{margin:'1rem 0'}}>. Neither Wealthfront Brokerage nor any of its affiliates are a bank, and Cash Account is not a checking or savings account. We convey funds to institutions accepting and maintaining deposits. Investment management and advisory services are provided by Wealthfront Advisers LLC (“Wealthfront Advisers”), an SEC registered investment adviser, and financial planning tools are provided by Wealthfront Software LLC (“Wealthfront”).</p>
            <p>The effectiveness of the Tax-Loss Harvesting strategy to reduce the tax liability of the client will depend on the client’s entire tax and investment profile, including purchases and dispositions in a client’s (or client’s spouse’s) accounts outside of Wealthfront Advisers and type of investments (e.g., taxable or nontaxable) or holding period (e.g., short- term or long-term).Tax loss harvesting may generate a higher number of trades due to attempts to capture losses. There is a chance that trading attributed to tax loss harvesting may create capital gains and wash sales and could be subject to higher transaction costs and market impacts. In addition, tax loss harvesting strategies may produce losses, which may not be offset by sufficient gains in the account and may be limited to a $3,000 deduction against income. The utilization of losses harvested through the strategy will depend upon the recognition of capital gains in the same or a future tax period, and in addition may be subject to limitations under applicable tax laws, e.g., if there are insufficient realized gains in the tax period, the use of harvested losses may be limited to a $3,000 deduction against income and distributions. Losses harvested through the strategy that are not utilized in the tax period when recognized (e.g., because of insufficient capital gains and/or significant capital loss carryforwards), generally may be carried forward to offset future capital gains, if any.</p>
            <p style={{margin:'1rem 0'}}>All investing involves risk, including the possible loss of money you invest, and past performance does not guarantee future performance. Historical returns, expected returns, and probability projections are provided for informational and illustrative purposes, and may not reflect actual future performance. Please see our</p>
            <p>Wealthfront, Wealthfront Advisers and Wealthfront Brokerage are wholly owned subsidiaries of Wealthfront Corporation.</p>
            <p style={{marginTop:'1rem'}}>&copy; 2021 Wealthfront Corporation. All rights reserved.</p>
          </div>
        </div>
      </>
    )
  }
}
