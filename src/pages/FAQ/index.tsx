import PageLayout from "../../shared/layouts/PageLayout";
import "./style.css"

const FAQ = () =>{
  return (
    <PageLayout name={'FAQ'} href={'/faq'}>
        <section className="faq">
          <div className="faq__container">

            <div className="faq__image">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                alt="Vegetables"
              />
            </div>

            <div className="faq__content">

              <details open className="faq__item">
                <summary>What Facilities Does Your Hotel Have?</summary>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ad voluptate doloribus eos sunt labore ad enim voluptatem.
                </p>
              </details>

              <details className="faq__item">
                <summary>How Do I Book A Room For My Vacation?</summary>
                <p>
                  You can easily book a room from our website or contact support.
                </p>
              </details>

              <details className="faq__item">
                <summary>How We are best among others?</summary>
                <p>
                  We provide premium services and best customer experience.
                </p>
              </details>

              <details className="faq__item">
                <summary>Is There Any Fitness Center In Your Hotel?</summary>
                <p>
                  Yes, we have a modern fitness center available 24/7.
                </p>
              </details>

              <details className="faq__item">
                <summary>What Type Of Room Service Do You Offer?</summary>
                <p>
                  We offer standard, deluxe, and luxury room services.
                </p>
              </details>

            </div>
          </div>
        </section>
    </PageLayout>
  )
};


export default FAQ;
