import './content.css';

function Content() {
    return ( 
        <div className='main-content'>


            <div className="descriptions">
                <h1>کافه کاردیتو</h1>
                <p>کافه کاردیتو محلی دنج و جذاب برای خاطرات خوش ، گردهمایی های دوستانه و مرور خاطرات زیبای گذشته ، شاد کردن عزیزانتان ، محلی برای دوری از اعصاب خوردی های روز مره و... خواهد بود . ما تمام تلاش خود را برای ایجاد این بستر مناسب خواهیم کرد .</p>
                <button>بیشتر در مورد ما بدانید</button>
            </div>


            <div className="advice-coffee-box">
                <h3>پیشنهاد کافه کاردیتو</h3>
                <p className='advice-paragraph'>از لحظه های با هم بودن استفاده کنید و مدتی که ما در خدمتتان هستیم با پیشنهادات ما خاطرات خوش بسازید .</p>
                <div className="advice-item">
                    <div className="advice-item-1">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/699/528/small/coffee-mug-icon-design-free-vector.jpg" alt="" />
                        <p><a href="#">قهوه بیرون بر</a></p>
                    </div>
                    <div className="advice-item-1">
                        <img src="https://img.freepik.com/premium-vector/cake-logo-icon-design-illustration_775854-2226.jpg" alt="" />
                        <p><a href="#">انواع کیک و شیرینی</a></p>
                    </div>
                    <div className="advice-item-1">
                        <img src="https://static.vecteezy.com/system/resources/previews/022/393/435/non_2x/ice-cream-logo-design-vector.jpg" alt="" />
                        <p><a href="#">انواع بستنی</a></p>
                    </div>
                    <div className="advice-item-1">
                        <img src="https://static.vecteezy.com/system/resources/previews/047/927/939/non_2x/coffee-cup-logo-design-art-vector.jpg" alt="" />
                        <p><a href="#">انواع قهوه</a></p>
                    </div>
                </div>
            </div>


            <div className="gallery-box">
                <h3>گالری کافه کاردیتو</h3>
                <div className="gallery">
                    <img src="https://wellingtonnz.bynder.com/transform/39cd535b-094b-4064-9cbb-e1e6ae1d1cc2/Customs-06?io=transform:fit,width:576" alt="" />
                    <img src="https://coffeebean.com.au/cdn/shop/articles/nathan-dumlao-6VhPY27jdps-unsplash_1600x.jpg?v=1670108329" alt="" />
                    <img src="https://storage.googleapis.com/mkt-hq-website-prod-eu/be/2017/09/Coffee-POS-Lightspeed.jpeg" alt="" />
                    <img src="https://i.pinimg.com/736x/27/16/28/2716286c8261bad5786606f0d9f45e2d.jpg" alt="" />
                    <img src="https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg" alt="" />
                    <img src="https://static01.nyt.com/images/2023/10/27/multimedia/27cakerex-plzm/27cakerex-plzm-threeByTwoMediumAt2X.jpg" alt="" />
                </div>
            </div>

            <div className="about-caffee">
                <img src="https://img.freepik.com/premium-photo/cup-coffee-latte-with-heart-shape_665280-26253.jpg" alt="" />
                <div className="about-text">
                    <h3 id='coffe-title'>کافه کاردیتو</h3>
                    <p className='par-1'>میزبانی صمیمانه در محیطی رویایی در دنج ترین کافه مشهد</p>
                    <br />
                    <p className='par-2'>فضای مناسب برای دیدار های دوستانه ، قرار های کاری و لحظات خاطره انگیز برای تمام فصول سال با تهویه مناسب و نور کافی ، فضایی برای تمام سلیقه ها</p>
                    <br />
                    <p className="par-3">
                        لحظات زیبای خود را با ما در کافه تجربه کنید و به دوستانتان نیز ما را پیشنهاد دهید.
                    </p><br />
                    <p className="par-4">
                        ما در کافه کاردیتو با استفاده از بهترین و تازه ترین مواد اولیه و کادری مجرب همه روزه در خدمت شما عزیزان هستیم.
                    </p>
                    <div className="static">
                        <div className="hour-work">
                            <h3>14h</h3>
                            <p>ساعت کاری در روز</p>
                        </div>
                        <div className="satisfied">
                            <h3>78%</h3>
                            <p>رضایت</p>
                        </div>
                        <div className="quality">
                            <h3>77%</h3>
                            <p>کیفیت</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customer-vote">
                <h2>نظرات مشتریان</h2>
                <div className="cards-vote">
                    <div className="card-vote-1">
                        <img src="https://cdn.memiah.co.uk/uploads/counselling-directory.org.uk/profile/photo_452781437954761.jpeg" alt="" />
                        <div className="">
                            <h5>مرجان سمیعی</h5><br />
                            <p>با توجه به اینکه شما به جزئیات برنامه‌نویسی و مدیریت سیستم‌ها در حوزه بیمارستانی علاقه دارید و درخواست‌های مشخص و حرفه‌ای برای پروژه‌های مرتبط داشته‌اید.</p>
                        </div>
                    </div>
                    <div className="card-vote-2">
                    <img src="https://deall.osu.edu/sites/default/files/events-images/jamesperson%20pic.jpg" alt="" />
                        <div className="">
                            <h5>کوروش حاتمی فرد</h5><br />
                            <p>با توجه به اینکه شما به جزئیات برنامه‌نویسی و مدیریت سیستم‌ها در حوزه بیمارستانی علاقه دارید و درخواست‌های مشخص و حرفه‌ای برای پروژه‌های مرتبط داشته‌اید.</p>
                        </div>
                    </div>
                    <div className="card-vote-3">
                    <img src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg" alt="" />
                        <div className="">
                            <h5>اسفندیار بهلولی</h5><br />
                            <p>با توجه به اینکه شما به جزئیات برنامه‌نویسی و مدیریت سیستم‌ها در حوزه بیمارستانی علاقه دارید و درخواست‌های مشخص و حرفه‌ای برای پروژه‌های مرتبط داشته‌اید.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Content;