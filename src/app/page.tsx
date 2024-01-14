import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <main>
            <div className="car-search">
                <div className="car-search-notice text-center">
                    <h1>
                        Clean and Salvage Car Auctions - Repairable Vehicles for Sale Online
                    </h1>
                    <h2>
                        Search for used and salvage cars. Bid online. No dealer license required. Open to the public and business.
                    </h2>
                </div>
                <form className="car-search-form">
                    <div className="row car-search-form-main">
                        <div className="col-md-2 car-type">
                            <label className="form-label text-uppercase">
                                MAKE
                            </label>
                            <select className="car-type-list">
                                <option>AMC</option>
                                <option>Acura</option>
                            </select>
                        </div>
                        <div className="col-md-2 car-model">
                            <label className="form-label text-uppercase">
                                MODEL
                            </label>
                            <select className="car-model-list">
                                <option>AMC</option>
                                <option>Acura</option>
                            </select>
                        </div>
                        <div className="col-md-2 from-year">
                            <label className="form-label text-uppercase">
                                FROM YEAR
                            </label>
                            <select className="from-year-list">
                                <option>1924</option>
                                <option>2025</option>
                            </select>
                        </div>
                        <div className="col-md-2 to-year">
                            <label className="form-label text-uppercase">
                                TO YEAR
                            </label>
                            <select className="to-year-list">
                                <option>1924</option>
                                <option>2025</option>
                            </select>
                        </div>
                        <div className="col-md-2 car-search">
                            <button><FontAwesomeIcon icon={faSearch} /> START SEARCH</button>
                        </div>
                    </div>
                    <div className="car-search-form-bottom">
                        <div className="buy-option">

                        </div>
                        <div className="access-company">

                        </div>
                    </div>
                </form>
            </div>
            <div className="advertisement-container">
                <div className="advertisement-item salvage-container">
                    <h1>
                        Featured Salvage Vehicles
                    </h1>
                </div>
                <div className="advertisement-item sale-container">
                    <h1>
                        Cars for sale
                    </h1>
                </div>
                <div className="advertisement-item cars4bid-container">
                    <h1>
                        What is CARS4.BID
                    </h1>
                </div>
                <div className="advertisement-item stepbid-container">
                    <h1>
                        Steps to bid
                    </h1>
                </div>
                <div className="advertisement-item help-container">
                    <h1>
                        Help center
                    </h1>
                </div>
                <div className="advertisement-item question-container">
                    <h1>
                        Frequently asked questions about buying cars at auction
                    </h1>
                </div>
                <div className="advertisement-item choose-container">
                    <h1>
                        Why choose CARS4.BID
                    </h1>
                </div>
            </div>
       </main>
    );
}