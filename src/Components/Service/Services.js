import React from "react";
import "../Style/All.css"
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const Services = () => {
  const data = [
    {
      id: 1,
      name: "Tribel.com",
      description: "Web development is the process of creating websites and web applications for the internet or intranet.",
      path: "https://www.tribel.com/"
    }
  ]
  return (
    <>
      <div className="our-service" name="services">
        <div className="text-center service-header pt-[60px]">
          <h3 className="text-4xl text-base-200 service-head">
            Bring The Revolution With
            <br /> The <span className="potential">Diligence</span> Service
          </h3>
          <div className="container grid grid-cols-12 gap-4 lg:mt-[70px] p-4 w-full md:w-[95%] lg:w-[90%] mx-auto">


            {
              data?.map((item) => {
                return <div className="card w-[330px] lg:w-[350px] xl:w-[360px] grid col-span-12 mx-auto md:col-span-6 xl:col-span-4 service-item-card my-4 py-2">
                  <div className="icon pt-5 pl-8">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.6731 41.5094C23.438 41.5095 23.2106 41.4256 23.0318 41.2728L16.6219 35.8148C16.5126 35.7218 16.4249 35.6062 16.3648 35.476C16.3046 35.3458 16.2734 35.204 16.2734 35.0606C16.2734 34.9171 16.3046 34.7754 16.3648 34.6452C16.4249 34.5149 16.5126 34.3993 16.6219 34.3063L23.0318 28.8483C23.2318 28.678 23.4912 28.594 23.7531 28.6149C24.0149 28.6358 24.2577 28.7599 24.4281 28.9598C24.7824 29.3767 24.7326 30.0018 24.3159 30.3561L18.7921 35.0603L24.3159 39.7643C24.4704 39.8957 24.5808 40.0714 24.6322 40.2676C24.6837 40.4637 24.6737 40.671 24.6036 40.8613C24.5335 41.0516 24.4066 41.2158 24.2402 41.3317C24.0738 41.4476 23.876 41.5097 23.6731 41.5094ZM36.3269 41.5094C36.0467 41.5094 35.7682 41.3911 35.5725 41.1606C35.4022 40.9606 35.3183 40.7012 35.3392 40.4394C35.3602 40.1775 35.4842 39.9347 35.6842 39.7643L41.208 35.0603L35.6842 30.3561C35.4914 30.1838 35.3736 29.9429 35.356 29.6848C35.3384 29.4268 35.4224 29.1722 35.5901 28.9753C35.7577 28.7784 35.9958 28.6549 36.2533 28.6311C36.5108 28.6074 36.7674 28.6853 36.9682 28.8482L43.3782 34.3062C43.4874 34.3992 43.5751 34.5148 43.6353 34.645C43.6955 34.7752 43.7266 34.917 43.7266 35.0604C43.7266 35.2039 43.6955 35.3456 43.6353 35.4759C43.5751 35.6061 43.4874 35.7217 43.3782 35.8147L36.9682 41.2727C36.7895 41.4255 36.5622 41.5094 36.3271 41.5094H36.3269ZM27.7309 45.6033C27.5834 45.6035 27.4377 45.5707 27.3044 45.5074C27.1711 45.444 27.0537 45.3517 26.9607 45.2372C26.8676 45.1227 26.8014 44.9888 26.7667 44.8454C26.732 44.702 26.7298 44.5526 26.7602 44.4083L30.755 25.4409C30.8092 25.1838 30.9632 24.9588 31.1833 24.8153C31.4034 24.6718 31.6715 24.6217 31.9286 24.6758C32.1857 24.73 32.4107 24.8841 32.5542 25.1042C32.6977 25.3243 32.7478 25.5924 32.6937 25.8494L28.6989 44.8167C28.6521 45.0388 28.5304 45.2382 28.3542 45.3814C28.178 45.5246 27.958 45.603 27.7309 45.6033Z"></path>
                      <path d="M53.3491 55.9367H6.65094C2.98387 55.9367 0 52.9534 0 49.2858V9.65094C0 5.98387 2.98387 3 6.65094 3H53.3491C57.0161 3 60 5.98387 60 9.65094V49.2858C60 52.9534 57.0161 55.9367 53.3491 55.9367ZM6.65094 4.98113C4.07618 4.98113 1.98113 7.07618 1.98113 9.65094V49.2858C1.98113 51.8605 4.07618 53.9556 6.65094 53.9556H53.3491C55.9238 53.9556 58.0189 51.8605 58.0189 49.2858V9.65094C58.0189 7.07618 55.9238 4.98113 53.3491 4.98113H6.65094Z"></path>
                      <path d="M59.0094 18.8618H0.990565C0.73075 18.8574 0.483062 18.7511 0.300878 18.5658C0.118694 18.3805 0.0166016 18.1311 0.0166016 17.8712C0.0166016 17.6114 0.118694 17.3619 0.300878 17.1766C0.483062 16.9913 0.73075 16.885 0.990565 16.8806H59.0094C59.2692 16.885 59.5169 16.9913 59.6991 17.1766C59.8813 17.3619 59.9834 17.6114 59.9834 17.8712C59.9834 18.1311 59.8813 18.3805 59.6991 18.5658C59.5169 18.7511 59.2692 18.8574 59.0094 18.8618ZM16.9248 14.1218C15.1968 14.1218 13.79 12.7149 13.79 10.9869C13.79 9.25852 15.1968 7.8522 16.9248 7.8522C18.6532 7.8522 20.0595 9.25852 20.0595 10.9869C20.0595 12.7149 18.6532 14.1218 16.9248 14.1218ZM16.9248 9.83333C16.289 9.83333 15.7711 10.3507 15.7711 10.9869C15.7711 11.6231 16.289 12.1406 16.9248 12.1406C17.561 12.1406 18.0784 11.6233 18.0784 10.9869C18.0784 10.3506 17.561 9.83333 16.9248 9.83333ZM7.2934 14.0914C5.56472 14.0914 4.15854 12.685 4.15854 10.9566C4.15854 9.2281 5.56472 7.82178 7.29325 7.82178C9.02179 7.82178 10.428 9.2281 10.428 10.9566C10.428 12.685 9.02193 14.0914 7.2934 14.0914ZM7.2934 9.80291C6.65759 9.80291 6.13967 10.3208 6.13967 10.9566C6.13967 11.5929 6.65759 12.1102 7.29325 12.1102C7.92948 12.1102 8.44684 11.5929 8.44684 10.9566C8.44684 10.3208 7.92962 9.80291 7.2934 9.80291ZM26.5562 14.1516C24.8284 14.1516 23.4221 12.7453 23.4221 11.0168C23.4221 9.28895 24.8283 7.88263 26.5562 7.88263C28.2848 7.88263 29.6909 9.28881 29.6909 11.0168C29.6909 12.7453 28.2848 14.1516 26.5562 14.1516ZM26.5562 9.86319C25.9206 9.86319 25.4032 10.3806 25.4032 11.0168C25.4032 11.653 25.9206 12.1705 26.5562 12.1705C27.1925 12.1705 27.7098 11.653 27.7098 11.0168C27.7098 10.3806 27.1925 9.86319 26.5562 9.86319Z"></path>
                    </svg>
                  </div>

                  <div className="card-body">
                    <h2 className="text-2xl card-title text-white">
                      {item?.name}
                    </h2>
                    <p className="text-base-200 service-item-text">
                      {item?.description}
                    </p>{" "}
                    <div className="card-actions">
                      <div className="service-item-button">
                        <a href={item?.path}>
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 60 60"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z"></path>
                          </svg>
                          <span className="text-white font-bold flex btn-text">Learn More<Icon icon="maki:arrow" width='15px' className="font-bold mt-1 ml-1" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }

            <div className="card mx-auto w-[330px] lg:w-[350px] xl:w-[360px] grid col-span-12 md:col-span-6 xl:col-span-4 service-item-card my-4 py-2">
              <div class="icon pt-5 pl-8">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M57.6585 3.41467H10.2439C8.97561 3.41467 7.90244 4.43906 7.90244 5.75614V11.3171H2.34146C1.02439 11.3171 0 12.3415 0 13.6586V54.2439C0 55.5122 1.02439 56.5854 2.34146 56.5854H49.7561C51.0244 56.5854 52.0976 55.561 52.0976 54.2439V48.683H57.6585C58.9268 48.683 60 47.6586 60 46.3415V5.75614C60 4.43906 58.9756 3.41467 57.6585 3.41467ZM10.2439 5.36589H57.6585C57.8537 5.36589 58.0488 5.51223 58.0488 5.75614V12.4878H9.85366V5.75614C9.85366 5.51223 10.0488 5.36589 10.2439 5.36589ZM2.34146 13.2683H7.90244V20.3903H1.95122V13.6586C1.95122 13.4635 2.09756 13.2683 2.34146 13.2683ZM50.1463 54.2439C50.1463 54.4391 50 54.6342 49.7561 54.6342H2.34146C2.14634 54.6342 1.95122 54.4878 1.95122 54.2439V22.3415H7.90244V46.3415C7.90244 47.6098 8.92683 48.683 10.2439 48.683H50.1463V54.2439ZM57.6585 46.7317H10.2439C10.0488 46.7317 9.85366 46.5854 9.85366 46.3415V14.4391H58.0488V46.3415C58.0488 46.5366 57.9024 46.7317 57.6585 46.7317Z"></path>
                  <path d="M18.0976 9.70732H14.4878C13.9512 9.70732 13.5122 9.2683 13.5122 8.73171C13.5122 8.19513 13.9512 7.7561 14.4878 7.7561H18.0976C18.6342 7.7561 19.0732 8.19513 19.0732 8.73171C19.0732 9.2683 18.6342 9.70732 18.0976 9.70732ZM26.3415 9.70732H22.7317C22.1951 9.70732 21.7561 9.2683 21.7561 8.73171C21.7561 8.19513 22.1951 7.7561 22.7317 7.7561H26.3415C26.8781 7.7561 27.3171 8.19513 27.3171 8.73171C27.3171 9.2683 26.8781 9.70732 26.3415 9.70732Z"></path>
                  <path d="M18.9756 30.683L28.2439 35.4634V33.6098L21.1219 30.0488L28.2439 26.4878V24.6342L18.9756 29.3659V30.683ZM30.2927 36.0488H32.0488L37.5122 21.9025H35.7073L30.2927 36.0488ZM39.5122 24.6342V26.4878L46.6829 30.0488L39.5122 33.6098V35.4634L48.7805 30.683V29.3659L39.5122 24.6342Z"></path>
                </svg>
              </div>

              <div className="card-body">
                <h2 className="text-2xl card-title text-white">
                  Charitable Donation
                </h2>
                <p className="text-white service-item-text">
                  Web development is the process of creating websites and web
                  applications for the internet or intranet.
                </p>{" "}
                <div className="card-actions">
                  <div className="service-item-button">
                    <NavLink to="/workflow">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 60 60"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z"></path>
                      </svg>
                      <span className="text-white font-bold flex btn-text">Learn More<Icon icon="maki:arrow" width='15px' className="font-bold mt-1 ml-1" /></span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Services;
