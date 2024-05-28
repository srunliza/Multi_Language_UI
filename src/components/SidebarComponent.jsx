import Link from "next/link";
import NavbarComponent from "./NavbarComponent";

const SidebarComponent = () => {
    return (
        <div class="flex h-screen bg-gray-100">
            {/* <!-- sidebar --> */}
            <div class="hidden md:flex flex-col w-64 bg-blue-800 ">
                <div class="flex items-center justify-center h-30 bg-blue-800 ">
                    <img className="w-[300px] bg-blue-800" src="./logo.png" alt="multi logo" />
                </div>
                <div className="flex flex-col flex-1 ">
                    <nav className="flex-1 px-2 block m-auto">
                        <div>
                            <Link href="#">
                                <svg width="208" height="54" viewBox="0 0 208 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0H197.5C203.023 0 207.5 4.47715 207.5 10V44C207.5 49.5228 203.023 54 197.5 54H0.5V10Z" fill="white" />
                                    <g clip-path="url(#clip0_3051_1318)">
                                        <path d="M57.5 19V21H47.5V34.385L49.263 33H63.5V26H65.5V34C65.5 34.2652 65.3946 34.5196 65.2071 34.7071C65.0196 34.8946 64.7652 35 64.5 35H49.955L45.5 38.5V20C45.5 19.7348 45.6054 19.4804 45.7929 19.2929C45.9804 19.1054 46.2348 19 46.5 19H57.5ZM62.5 19V16H64.5V19H67.5V21H64.5V24H62.5V21H59.5V19H62.5Z" fill="#1A42BC" />
                                    </g>
                                    <path d="M88.2102 22.3636V34H86.3352L80.8523 26.0739H80.7557V34H78.6477V22.3636H80.5341L86.0114 30.2955H86.1136V22.3636H88.2102ZM94.2798 34.1705C93.4048 34.1705 92.6491 33.9886 92.0128 33.625C91.3802 33.2576 90.8935 32.7386 90.5526 32.0682C90.2116 31.3939 90.0412 30.6004 90.0412 29.6875C90.0412 28.7898 90.2116 28.0019 90.5526 27.3239C90.8973 26.642 91.3783 26.1117 91.9957 25.733C92.6132 25.3504 93.3385 25.1591 94.1719 25.1591C94.7098 25.1591 95.2173 25.2462 95.6946 25.4205C96.1757 25.5909 96.5999 25.8561 96.9673 26.2159C97.3385 26.5758 97.6302 27.0341 97.8423 27.5909C98.0545 28.1439 98.1605 28.803 98.1605 29.5682V30.1989H91.0071V28.8125H96.1889C96.1851 28.4186 96.0999 28.0682 95.9332 27.7614C95.7666 27.4508 95.5336 27.2064 95.2344 27.0284C94.9389 26.8504 94.5942 26.7614 94.2003 26.7614C93.7798 26.7614 93.4105 26.8636 93.0923 27.0682C92.7741 27.2689 92.526 27.5341 92.348 27.8636C92.1738 28.1894 92.0848 28.5473 92.081 28.9375V30.1477C92.081 30.6553 92.1738 31.0909 92.3594 31.4545C92.545 31.8144 92.8045 32.0909 93.1378 32.2841C93.4711 32.4735 93.8613 32.5682 94.3082 32.5682C94.6075 32.5682 94.8783 32.5265 95.1207 32.4432C95.3632 32.3561 95.5734 32.2292 95.7514 32.0625C95.9295 31.8958 96.0639 31.6894 96.1548 31.4432L98.0753 31.6591C97.9541 32.1667 97.723 32.6098 97.3821 32.9886C97.045 33.3636 96.6132 33.6553 96.0866 33.8636C95.5601 34.0682 94.9579 34.1705 94.2798 34.1705ZM101.655 34L99.1889 25.2727H101.286L102.82 31.4091H102.899L104.467 25.2727H106.541L108.109 31.375H108.195L109.706 25.2727H111.808L109.337 34H107.195L105.558 28.1023H105.439L103.803 34H101.655ZM117.304 34V22.3636H121.668C122.562 22.3636 123.312 22.5303 123.918 22.8636C124.527 23.197 124.988 23.6553 125.298 24.2386C125.613 24.8182 125.77 25.4773 125.77 26.2159C125.77 26.9621 125.613 27.625 125.298 28.2045C124.984 28.7841 124.52 29.2405 123.906 29.5739C123.293 29.9034 122.537 30.0682 121.639 30.0682H118.747V28.3352H121.355C121.878 28.3352 122.306 28.2443 122.639 28.0625C122.973 27.8807 123.219 27.6307 123.378 27.3125C123.541 26.9943 123.622 26.6288 123.622 26.2159C123.622 25.803 123.541 25.4394 123.378 25.125C123.219 24.8106 122.971 24.5663 122.634 24.392C122.3 24.214 121.87 24.125 121.344 24.125H119.412V34H117.304ZM127.51 34V25.2727H129.504V26.7273H129.595C129.754 26.2235 130.027 25.8352 130.413 25.5625C130.804 25.286 131.249 25.1477 131.749 25.1477C131.862 25.1477 131.989 25.1534 132.129 25.1648C132.273 25.1723 132.393 25.1856 132.487 25.2045V27.0966C132.4 27.0663 132.262 27.0398 132.072 27.017C131.887 26.9905 131.707 26.9773 131.533 26.9773C131.158 26.9773 130.821 27.0587 130.521 27.2216C130.226 27.3807 129.993 27.6023 129.822 27.8864C129.652 28.1705 129.567 28.4981 129.567 28.8693V34H127.51ZM137.301 34.1705C136.449 34.1705 135.71 33.983 135.085 33.608C134.46 33.233 133.975 32.7083 133.631 32.0341C133.29 31.3598 133.119 30.572 133.119 29.6705C133.119 28.7689 133.29 27.9792 133.631 27.3011C133.975 26.6231 134.46 26.0966 135.085 25.7216C135.71 25.3466 136.449 25.1591 137.301 25.1591C138.153 25.1591 138.892 25.3466 139.517 25.7216C140.142 26.0966 140.625 26.6231 140.966 27.3011C141.311 27.9792 141.483 28.7689 141.483 29.6705C141.483 30.572 141.311 31.3598 140.966 32.0341C140.625 32.7083 140.142 33.233 139.517 33.608C138.892 33.983 138.153 34.1705 137.301 34.1705ZM137.312 32.5227C137.775 32.5227 138.161 32.3958 138.472 32.142C138.782 31.8845 139.013 31.5398 139.165 31.108C139.32 30.6761 139.398 30.1951 139.398 29.6648C139.398 29.1307 139.32 28.6477 139.165 28.2159C139.013 27.7803 138.782 27.4337 138.472 27.1761C138.161 26.9186 137.775 26.7898 137.312 26.7898C136.839 26.7898 136.445 26.9186 136.131 27.1761C135.82 27.4337 135.587 27.7803 135.432 28.2159C135.28 28.6477 135.205 29.1307 135.205 29.6648C135.205 30.1951 135.28 30.6761 135.432 31.108C135.587 31.5398 135.82 31.8845 136.131 32.142C136.445 32.3958 136.839 32.5227 137.312 32.5227ZM143.229 25.2727H145.286V34.5C145.286 35.1288 145.166 35.6477 144.928 36.0568C144.689 36.4659 144.344 36.7708 143.893 36.9716C143.443 37.1723 142.895 37.2727 142.251 37.2727C142.176 37.2727 142.106 37.2708 142.041 37.267C141.977 37.267 141.907 37.2652 141.831 37.2614V35.5852C141.888 35.589 141.939 35.5909 141.984 35.5909C142.03 35.5947 142.077 35.5966 142.126 35.5966C142.52 35.5966 142.803 35.5 142.973 35.3068C143.143 35.1174 143.229 34.839 143.229 34.4716V25.2727ZM144.251 24.0341C143.922 24.0341 143.64 23.9261 143.405 23.7102C143.174 23.4905 143.058 23.2273 143.058 22.9205C143.058 22.6098 143.174 22.3466 143.405 22.1307C143.64 21.911 143.922 21.8011 144.251 21.8011C144.577 21.8011 144.856 21.911 145.087 22.1307C145.321 22.3466 145.439 22.6098 145.439 22.9205C145.439 23.2273 145.321 23.4905 145.087 23.7102C144.856 23.9261 144.577 24.0341 144.251 24.0341ZM151.264 34.1705C150.389 34.1705 149.634 33.9886 148.997 33.625C148.365 33.2576 147.878 32.7386 147.537 32.0682C147.196 31.3939 147.026 30.6004 147.026 29.6875C147.026 28.7898 147.196 28.0019 147.537 27.3239C147.882 26.642 148.363 26.1117 148.98 25.733C149.598 25.3504 150.323 25.1591 151.156 25.1591C151.694 25.1591 152.202 25.2462 152.679 25.4205C153.16 25.5909 153.584 25.8561 153.952 26.2159C154.323 26.5758 154.615 27.0341 154.827 27.5909C155.039 28.1439 155.145 28.803 155.145 29.5682V30.1989H147.991V28.8125H153.173C153.17 28.4186 153.084 28.0682 152.918 27.7614C152.751 27.4508 152.518 27.2064 152.219 27.0284C151.923 26.8504 151.579 26.7614 151.185 26.7614C150.764 26.7614 150.395 26.8636 150.077 27.0682C149.759 27.2689 149.51 27.5341 149.332 27.8636C149.158 28.1894 149.069 28.5473 149.065 28.9375V30.1477C149.065 30.6553 149.158 31.0909 149.344 31.4545C149.529 31.8144 149.789 32.0909 150.122 32.2841C150.455 32.4735 150.846 32.5682 151.293 32.5682C151.592 32.5682 151.863 32.5265 152.105 32.4432C152.348 32.3561 152.558 32.2292 152.736 32.0625C152.914 31.8958 153.048 31.6894 153.139 31.4432L155.06 31.6591C154.938 32.1667 154.707 32.6098 154.366 32.9886C154.029 33.3636 153.598 33.6553 153.071 33.8636C152.545 34.0682 151.942 34.1705 151.264 34.1705ZM160.692 34.1705C159.821 34.1705 159.072 33.9792 158.447 33.5966C157.826 33.214 157.347 32.6856 157.01 32.0114C156.677 31.3333 156.51 30.553 156.51 29.6705C156.51 28.7841 156.68 28.0019 157.021 27.3239C157.362 26.642 157.843 26.1117 158.464 25.733C159.089 25.3504 159.828 25.1591 160.68 25.1591C161.389 25.1591 162.016 25.2898 162.561 25.5511C163.11 25.8087 163.548 26.1742 163.874 26.6477C164.199 27.1174 164.385 27.6667 164.43 28.2955H162.464C162.385 27.875 162.196 27.5246 161.896 27.2443C161.601 26.9602 161.205 26.8182 160.709 26.8182C160.288 26.8182 159.919 26.9318 159.601 27.1591C159.283 27.3826 159.035 27.7045 158.857 28.125C158.682 28.5455 158.595 29.0492 158.595 29.6364C158.595 30.2311 158.682 30.7424 158.857 31.1705C159.031 31.5947 159.275 31.9223 159.589 32.1534C159.908 32.3807 160.281 32.4943 160.709 32.4943C161.012 32.4943 161.283 32.4375 161.521 32.3239C161.764 32.2064 161.966 32.0379 162.129 31.8182C162.292 31.5985 162.404 31.3314 162.464 31.017H164.43C164.381 31.6345 164.199 32.1818 163.885 32.6591C163.571 33.1326 163.143 33.5038 162.601 33.7727C162.059 34.0379 161.423 34.1705 160.692 34.1705ZM170.477 25.2727V26.8636H165.46V25.2727H170.477ZM166.699 23.1818H168.756V31.375C168.756 31.6515 168.797 31.8636 168.881 32.0114C168.968 32.1553 169.081 32.2538 169.222 32.3068C169.362 32.3598 169.517 32.3864 169.688 32.3864C169.816 32.3864 169.934 32.3769 170.04 32.358C170.15 32.339 170.233 32.322 170.29 32.3068L170.636 33.9148C170.527 33.9527 170.369 33.9943 170.165 34.0398C169.964 34.0852 169.718 34.1117 169.426 34.1193C168.911 34.1345 168.447 34.0568 168.034 33.8864C167.621 33.7121 167.294 33.4432 167.051 33.0795C166.813 32.7159 166.695 32.2614 166.699 31.7159V23.1818Z" fill="#1A42BC" />
                                    <defs>
                                        <clipPath id="clip0_3051_1318">
                                            <path d="M43.5 26C43.5 20.4772 47.9772 16 53.5 16H67.5V40H43.5V26Z" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100  gap-2 pt-10 font-light-[16px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.93359 11.3755L11.9998 2.75L22.0659 11.3755" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    <path d="M4.09277 10.1602V21.2511H19.9103V10.1602" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    <path d="M11.9998 12.7031L11.9998 16.1115" stroke="white" stroke-width="2" stroke-linecap="round" />
                                </svg>

                                <b> Dashboard</b>
                            </Link>
                            <Link href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.51408 14.7071C12.6415 14.6991 15.3007 16.135 16.2782 19.2261C14.308 20.4272 11.9889 20.8898 9.51408 20.8837C7.03921 20.8898 4.72016 20.4272 2.75 19.2261C3.72857 16.1317 6.38327 14.6991 9.51408 14.7071Z" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M16.0852 18.2321C17.975 18.2367 19.7458 17.8835 21.2502 16.9664C20.5039 14.606 18.4733 13.5095 16.0852 13.5157C14.5809 13.5118 13.2205 13.9435 12.2324 14.8529" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <circle cx="9.51421" cy="7.35406" r="4.23687" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M13.7143 5.67209C14.3046 5.05343 15.1371 4.66797 16.0597 4.66797C17.8498 4.66797 19.301 6.11914 19.301 7.90924C19.301 9.69934 17.8498 11.1505 16.0597 11.1505C14.9654 11.1505 13.9978 10.6082 13.4109 9.7777" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                </svg>
                                <b> Profile</b>

                            </Link>
                            <Link href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.08496 7.59751H17.5722" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M13.433 11.2108H13.4415" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M9.32872 11.2108H9.33729" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M5.21544 11.2108H5.22401" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M13.433 14.8045H13.4415" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M9.32872 14.8045H9.33729" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M5.21544 14.8045H5.22401" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M13.0649 0.75V3.79399" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M5.59277 0.75V3.79399" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.65 2.21094H1V19.2503H17.65V2.21094Z" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                </svg>
                                <b>Calender</b>
                            </Link>
                            <Link href="/projectList" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2264 13.4962C18.2264 15.0297 17.7716 16.5289 16.9196 17.804C16.0676 19.0791 14.8566 20.0729 13.4398 20.6598C12.023 21.2466 10.464 21.4002 8.95987 21.101C7.45578 20.8018 6.07418 20.0634 4.98979 18.979C3.9054 17.8946 3.16692 16.513 2.86774 15.0089C2.56855 13.5048 2.72211 11.9458 3.30897 10.5289C3.89584 9.11211 4.88967 7.90112 6.16478 7.04912C7.43988 6.19712 8.939 5.74237 10.4726 5.74237L10.4726 13.4962H18.2264Z" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M13.5273 2.75018C15.5837 2.75018 17.5559 3.5671 19.01 5.02122C20.4641 6.47535 21.2811 8.44756 21.2811 10.504L13.5273 10.504L13.5273 2.75018Z" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                </svg>
                                <b> Project</b>
                            </Link>
                        </div>

                    </nav>
                    <div className="mb-[50px] ml-5">
                        <Link href="/setting" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2275 12.0345L18.1799 11.5611L18.1656 11.5621L18.1494 11.5649L18.2275 12.0345ZM18.2275 12.0345L18.2752 12.5088L18.2913 12.5069L18.3066 12.504L18.2275 12.0345ZM14.3797 17.2559L14.6817 16.8873L14.6769 16.8845L14.3797 17.2559ZM14.3797 17.2559L14.0778 17.6245L14.0826 17.6283L14.3797 17.2559ZM5.62122 17.2559L5.3193 16.8883L5.31263 16.894L5.30501 16.9007L5.62122 17.2559ZM5.62122 17.2559L5.92314 17.6255L5.93076 17.6188L5.93743 17.6131L5.62122 17.2559ZM1.77247 7.96552V7.48928H1.74961L1.7258 7.49119L1.77247 7.96552ZM1.77247 7.96552V8.44176H1.79628L1.82009 8.4389L1.77247 7.96552ZM12.5073 1.72397C12.493 1.55128 12.473 1.3791 12.4473 1.20773C12.4255 1.0561 12.3798 0.908871 12.312 0.771502L11.4653 1.20869C11.4748 1.22774 11.491 1.26583 11.5072 1.36489C11.5253 1.46966 11.5386 1.60587 11.5605 1.81827L12.5073 1.72397ZM12.6939 2.8698C12.6825 2.85551 12.6482 2.79741 12.6111 2.59358C12.5668 2.30499 12.5334 2.01494 12.5092 1.72397L11.5605 1.81827C11.5986 2.20021 11.6301 2.51643 11.6739 2.76217C11.7167 3.00219 11.7834 3.24698 11.9368 3.44795L12.6939 2.8698ZM13.1359 3.05267C13.0526 3.06387 12.9679 3.05286 12.8903 3.02074C12.8127 2.98862 12.7449 2.93655 12.6939 2.8698L11.9358 3.44699C12.0888 3.64757 12.2921 3.80408 12.5251 3.9006C12.7581 3.99713 13.0126 4.03024 13.2625 3.99657L13.1359 3.05267ZM14.0769 2.37356C13.7673 2.62787 13.5559 2.80027 13.3892 2.91552C13.2187 3.03362 13.153 3.04981 13.1359 3.05267L13.2625 3.99657C13.5121 3.96323 13.7321 3.83751 13.933 3.69749C14.1378 3.55462 14.3826 3.35461 14.6807 3.11077L14.0769 2.37356ZM14.8883 1.83922C14.7359 1.8878 14.6074 1.96495 14.4855 2.05162C14.3673 2.13544 14.2331 2.24593 14.0769 2.37356L14.6807 3.11077C14.8455 2.97552 14.9521 2.88885 15.0379 2.82789C15.0804 2.7936 15.128 2.76598 15.1788 2.74598L14.8883 1.83922ZM15.8912 1.88875C15.5739 1.75143 15.2176 1.73383 14.8883 1.83922L15.1788 2.74598C15.2884 2.71128 15.4068 2.71737 15.5122 2.76312L15.8912 1.88875ZM16.6456 2.50214C16.5027 2.35927 16.3798 2.23545 16.2712 2.1402C16.1586 2.0369 16.0304 1.95204 15.8912 1.88875L15.5122 2.76312C15.5322 2.77169 15.5684 2.79169 15.6446 2.85837C15.7236 2.92695 15.8208 3.0241 15.9722 3.17554L16.6456 2.50214ZM17.4961 3.3527L16.6456 2.50214L15.9722 3.17554L16.8227 4.0261L17.4961 3.3527ZM18.1094 4.10706C18.0458 3.96789 17.9606 3.83963 17.857 3.72702C17.7618 3.61844 17.638 3.49557 17.4961 3.3527L16.8227 4.0261C16.9741 4.17754 17.0703 4.27469 17.1408 4.35375C17.2075 4.42995 17.2265 4.46614 17.2351 4.48614L18.1094 4.10706ZM18.159 5.11001C18.2643 4.78071 18.2467 4.42437 18.1094 4.10706L17.2351 4.48614C17.2805 4.59167 17.2863 4.71007 17.2513 4.81951L18.159 5.11001ZM17.6246 5.92152C17.7523 5.76531 17.8628 5.63101 17.9466 5.51291C18.0323 5.39099 18.1104 5.26241 18.159 5.11001L17.2513 4.81951C17.2316 4.87032 17.2043 4.91785 17.1703 4.96047C17.0796 5.08231 16.9853 5.20142 16.8875 5.31765L17.6246 5.92152ZM16.9456 6.86256C16.9484 6.84541 16.9646 6.77969 17.0827 6.6092C17.198 6.44252 17.3703 6.23107 17.6246 5.92152L16.8875 5.31765C16.6437 5.61577 16.4427 5.86056 16.3008 6.06534C16.1608 6.26536 16.035 6.48633 16.0017 6.73588L16.9456 6.86256ZM17.1284 7.3045C17.0617 7.25351 17.0096 7.18577 16.9775 7.10815C16.9454 7.03054 16.9344 6.94581 16.9456 6.86256L16.0017 6.73588C15.9682 6.98571 16.0014 7.23996 16.0979 7.47282C16.1944 7.70567 16.3509 7.90885 16.5513 8.06172L17.1284 7.3045ZM18.2742 7.49024C17.8751 7.45023 17.6046 7.42356 17.4046 7.38737C17.2008 7.35022 17.1427 7.31593 17.1284 7.3045L16.5513 8.06172C16.7513 8.21412 16.996 8.28079 17.237 8.3246C17.4818 8.36842 17.797 8.4008 18.1799 8.4389L18.2742 7.49024ZM19.2266 7.68645C19.0893 7.61864 18.942 7.57299 18.7904 7.5512C18.6476 7.52738 18.4742 7.51024 18.2742 7.49024L18.179 8.43795C18.3923 8.45985 18.5285 8.47319 18.6333 8.49128C18.6871 8.49735 18.7398 8.51148 18.7895 8.53319L19.2266 7.68645ZM19.9 8.43033C19.7729 8.10911 19.5336 7.84484 19.2266 7.68645L18.7895 8.53319C18.8919 8.58585 18.9717 8.67383 19.0142 8.78084L19.9 8.43033ZM20 9.39708C20 9.19611 20 9.02181 19.9905 8.87704C19.9841 8.72429 19.9535 8.57353 19.9 8.43033L19.0142 8.78084C19.0219 8.80084 19.0333 8.84084 19.04 8.94085C19.0474 9.09313 19.0499 9.2456 19.0476 9.39804L20 9.39708ZM20 10.601V9.39708H19.0476V10.601H20ZM19.9 11.5668C19.959 11.4182 19.981 11.2696 19.9905 11.1201C20 10.9763 20 10.802 20 10.601H19.0476C19.0476 10.8144 19.0476 10.9515 19.04 11.0572C19.0395 11.1116 19.0308 11.1655 19.0142 11.2173L19.9 11.5668ZM19.2266 12.3116C19.5338 12.153 19.773 11.8884 19.9 11.5668L19.0142 11.2173C18.9717 11.3243 18.8919 11.4122 18.7895 11.4649L19.2266 12.3116ZM18.2742 12.5079C18.4742 12.4879 18.6485 12.4698 18.7904 12.4459C18.938 12.4221 19.0838 12.385 19.2257 12.3126L18.7895 11.4649C18.7398 11.4867 18.6871 11.5008 18.6333 11.5068C18.5285 11.5249 18.3923 11.5382 18.1799 11.5601L18.2742 12.5079ZM17.1294 12.6936C17.1437 12.6822 17.2018 12.6469 17.4056 12.6107C17.6056 12.5745 17.8761 12.5469 18.2742 12.5079L18.1799 11.5601C17.798 11.5982 17.4818 11.6287 17.2361 11.6735C16.996 11.7164 16.7522 11.783 16.5513 11.9354L17.1294 12.6936ZM16.9456 13.1355C16.9345 13.0522 16.9456 12.9674 16.9779 12.8898C17.0102 12.8122 17.0625 12.7445 17.1294 12.6936L16.5513 11.9354C16.3507 12.0884 16.1942 12.2917 16.0977 12.5247C16.0012 12.7578 15.968 13.0122 16.0017 13.2622L16.9456 13.1355ZM17.6246 14.0766C17.4362 13.8536 17.2554 13.6243 17.0827 13.3889C16.9646 13.2194 16.9484 13.1527 16.9456 13.1355L16.0027 13.2632C16.036 13.5127 16.1617 13.7318 16.3008 13.9328C16.4436 14.1366 16.6437 14.3823 16.8875 14.6795L17.6246 14.0766ZM18.159 14.8881C18.1098 14.7431 18.0382 14.6068 17.9466 14.4842C17.8435 14.345 17.7362 14.2091 17.6246 14.0766L16.8875 14.6795C17.0227 14.8452 17.1094 14.9509 17.1703 15.0376C17.2042 15.08 17.2315 15.1272 17.2513 15.1776L18.159 14.8881ZM18.1094 15.891C18.2467 15.5737 18.2643 15.2174 18.159 14.8881L17.2513 15.1776C17.2865 15.2874 17.2808 15.4061 17.2351 15.512L18.1094 15.891ZM17.497 16.6444C17.6389 16.5025 17.7618 16.3797 17.857 16.2711C17.9561 16.1577 18.0456 16.0387 18.1094 15.891L17.2351 15.512C17.2102 15.5603 17.1781 15.6046 17.1399 15.6434C17.0374 15.7557 16.9317 15.865 16.8227 15.971L17.497 16.6444ZM16.6456 17.496L17.497 16.6444L16.8227 15.971L15.9722 16.8226L16.6456 17.496ZM15.8912 18.1084C16.0379 18.0446 16.1579 17.956 16.2712 17.8569C16.3798 17.7617 16.5027 17.6379 16.6456 17.495L15.9722 16.8226C15.8208 16.974 15.7236 17.0702 15.6446 17.1397C15.6055 17.178 15.5609 17.2101 15.5122 17.235L15.8912 18.1084ZM14.8883 18.1589C15.2177 18.264 15.5741 18.246 15.8912 18.1084L15.5122 17.235C15.4066 17.2804 15.2882 17.2862 15.1788 17.2512L14.8883 18.1589ZM14.0769 17.6236C14.2331 17.7512 14.3673 17.8617 14.4855 17.9455C14.6074 18.0322 14.7359 18.1103 14.8883 18.1589L15.1788 17.2512C15.128 17.2315 15.0805 17.2042 15.0379 17.1702C14.916 17.0792 14.7969 16.9845 14.6807 16.8864L14.0769 17.6236ZM13.1359 16.9454C13.153 16.9473 13.2197 16.9645 13.3892 17.0826C13.5559 17.1978 13.7673 17.3702 14.0769 17.6236L14.6807 16.8864C14.3826 16.6435 14.1378 16.4425 13.933 16.2996C13.733 16.1606 13.5121 16.0349 13.2625 16.0015L13.1359 16.9454ZM12.6939 17.1283C12.7449 17.0615 12.8127 17.0095 12.8903 16.9774C12.9679 16.9452 13.0526 16.9342 13.1359 16.9454L13.2625 16.0015C13.0128 15.9679 12.7586 16.001 12.5258 16.0973C12.2929 16.1937 12.0897 16.3499 11.9368 16.5501L12.6939 17.1283ZM12.5082 18.2741C12.5482 17.875 12.5749 17.6045 12.6111 17.4045C12.6482 17.2007 12.6825 17.1426 12.6939 17.1283L11.9368 16.5501C11.7844 16.7502 11.7177 16.9959 11.6739 17.2359C11.6301 17.4807 11.5977 17.796 11.5596 18.1789L12.5082 18.2741ZM12.312 19.2266C12.3854 19.0837 12.4215 18.938 12.4463 18.7904C12.4711 18.6475 12.4882 18.4741 12.5082 18.2741L11.5596 18.1789C11.5464 18.3308 11.5295 18.4823 11.5072 18.6332C11.5012 18.6871 11.487 18.7397 11.4653 18.7894L12.312 19.2266ZM11.5682 19.9C11.8894 19.7728 12.1536 19.5336 12.312 19.2266L11.4653 18.7894C11.4127 18.8918 11.3247 18.9717 11.2177 19.0142L11.5682 19.9ZM10.6015 20C10.8024 20 10.9767 20 11.1215 19.9905C11.2701 19.9809 11.4196 19.959 11.5682 19.9L11.2177 19.0142C11.1659 19.0308 11.112 19.0394 11.0577 19.0399C10.9529 19.0475 10.8148 19.0475 10.6005 19.0475L10.6015 20ZM9.39759 20H10.6015L10.6005 19.0475H9.39759V20ZM8.43088 19.9C8.58041 19.959 8.72899 19.9809 8.87852 19.9905C9.02233 20 9.19663 20 9.39759 20V19.0475C9.18425 19.0475 9.0471 19.0475 8.94138 19.0399C8.88705 19.0394 8.83311 19.0308 8.78137 19.0142L8.43088 19.9ZM7.68703 19.2266C7.84541 19.5336 8.10967 19.7728 8.43088 19.9L8.78137 19.0142C8.67437 18.9717 8.5864 18.8918 8.53374 18.7894L7.68703 19.2266ZM7.49083 18.2741C7.51083 18.4741 7.52893 18.6484 7.55179 18.7904C7.57655 18.938 7.6137 19.0837 7.68703 19.2266L8.53374 18.7894C8.51202 18.7397 8.4979 18.6871 8.49183 18.6332C8.46952 18.4826 8.45173 18.3315 8.4385 18.1798L7.49083 18.2741ZM7.30511 17.1283C7.31654 17.1426 7.35083 17.2007 7.38797 17.4045C7.42416 17.6045 7.45083 17.876 7.49083 18.2741L8.4385 18.1798C8.4004 17.7979 8.36897 17.4817 8.32516 17.2359C8.2823 16.9959 8.21563 16.7511 8.06229 16.5501L7.30511 17.1283ZM6.86318 16.9454C6.94643 16.9342 7.03115 16.9452 7.10877 16.9774C7.18638 17.0095 7.25412 17.0615 7.30511 17.1283L8.06229 16.5501C7.90942 16.3497 7.70626 16.1943 7.47341 16.0977C7.24057 16.0012 6.98633 15.968 6.73651 16.0015L6.86318 16.9454ZM5.92219 17.6245C6.23172 17.3702 6.44316 17.1978 6.60984 17.0826C6.78032 16.9645 6.84604 16.9473 6.86318 16.9454L6.73651 16.0015C6.48698 16.0349 6.26696 16.1606 6.066 16.3006C5.86123 16.4425 5.61646 16.6435 5.31835 16.8873L5.92219 17.6245ZM5.11072 18.1589C5.26311 18.1103 5.39169 18.0331 5.5136 17.9465C5.6317 17.8627 5.76599 17.7522 5.92219 17.6245L5.31835 16.8873C5.20213 16.9851 5.08302 17.0795 4.96119 17.1702C4.91859 17.2042 4.87106 17.2315 4.82023 17.2512L5.11072 18.1589ZM4.10781 18.1103C4.42511 18.2476 4.78144 18.2643 5.11072 18.1589L4.82023 17.2512C4.7108 17.2862 4.59241 17.2804 4.48688 17.235L4.10781 18.1103ZM3.35349 17.496C3.49636 17.6388 3.61922 17.7626 3.7278 17.8579C3.84018 17.956 3.96114 18.0465 4.10781 18.1103L4.48688 17.235C4.43817 17.2101 4.39353 17.178 4.35449 17.1397C4.24217 17.0373 4.13291 16.9315 4.02686 16.8226L3.35349 17.496ZM2.50298 16.6454L3.35349 17.496L4.02686 16.8226L3.17634 15.972L2.50298 16.6454ZM1.88961 15.891C1.95343 16.0377 2.04295 16.1577 2.14201 16.2711C2.23725 16.3797 2.36106 16.5025 2.50298 16.6454L3.17634 15.972C3.06708 15.866 2.961 15.7567 2.85823 15.6443C2.81996 15.6053 2.78785 15.5607 2.76299 15.512L1.88961 15.891ZM1.84009 14.8881C1.7347 15.2174 1.7523 15.5737 1.88961 15.891L2.76299 15.512C2.71724 15.4065 2.71211 15.2881 2.7468 15.1786L1.84009 14.8881ZM2.3744 14.0766C2.24677 14.2328 2.13629 14.3671 2.05248 14.4852C1.96098 14.6075 1.8893 14.7435 1.84009 14.8881L2.7468 15.1786C2.7668 15.1277 2.79441 15.0802 2.82871 15.0376C2.88966 14.9519 2.97633 14.8452 3.11158 14.6804L2.3744 14.0766ZM3.05348 13.1355C3.05062 13.1527 3.03443 13.2184 2.91633 13.3889C2.80013 13.5556 2.6287 13.767 2.3744 14.0766L3.11158 14.6804C3.3554 14.3823 3.55636 14.1375 3.69827 13.9328C3.83828 13.7327 3.964 13.5118 3.99733 13.2622L3.05348 13.1355ZM2.87061 12.6936C2.93736 12.7446 2.98943 12.8123 3.02155 12.8899C3.05366 12.9676 3.06468 13.0523 3.05348 13.1355L3.99733 13.2622C4.03083 13.0124 3.99763 12.7581 3.90112 12.5253C3.8046 12.2924 3.6482 12.0892 3.44778 11.9364L2.87061 12.6936ZM1.72484 12.5088C2.12391 12.5479 2.3944 12.5745 2.59441 12.6107C2.79823 12.6479 2.85633 12.6822 2.87061 12.6936L3.44778 11.9354C3.24777 11.783 3.003 11.7164 2.76204 11.6735C2.51726 11.6297 2.20201 11.5973 1.81913 11.5592L1.72484 12.5088ZM0.772418 12.3116C0.915282 12.385 1.061 12.4212 1.20863 12.4459C1.35149 12.4707 1.52388 12.4888 1.72484 12.5088L1.82009 11.5601C1.66815 11.5469 1.51665 11.5291 1.36578 11.5068C1.31191 11.5007 1.25925 11.4866 1.20958 11.4649L0.772418 12.3116ZM0.0990523 11.5668C0.225999 11.8884 0.46524 12.153 0.772418 12.3116L1.20958 11.4649C1.10718 11.4122 1.02733 11.3243 0.984809 11.2173L0.0990523 11.5668ZM0 10.6029C0 10.8039 -8.87016e-09 10.9782 0.00952425 11.123C0.0156882 11.2754 0.0462354 11.4259 0.100005 11.5687L0.985761 11.2192C0.969204 11.1674 0.960535 11.1135 0.960046 11.0591C0.952968 10.9069 0.950427 10.7544 0.952426 10.602L0 10.6029ZM0 9.39899V10.6029H0.952426V9.39899H0ZM0.100005 8.43223C0.0464434 8.57575 0.0159063 8.72684 0.00952425 8.87989C-8.87016e-09 9.02372 0 9.19802 0 9.39899H0.952426C0.952426 9.18564 0.952426 9.04848 0.960046 8.94276C0.960505 8.88843 0.969175 8.83448 0.985761 8.78274L0.100005 8.43223ZM0.77337 7.68835C0.466364 7.84674 0.227145 8.11101 0.100005 8.43223L0.985761 8.78274C1.02828 8.67573 1.10814 8.58776 1.21053 8.5351L0.77337 7.68835ZM1.7258 7.49119C1.52579 7.51119 1.35149 7.53024 1.20958 7.5531C1.05796 7.5749 0.910732 7.62054 0.77337 7.68835L1.21053 8.5351C1.22958 8.52557 1.26768 8.50938 1.36673 8.49319C1.4715 8.47509 1.6077 8.46176 1.82009 8.43985L1.7258 7.49119ZM2.87157 7.30641C2.85728 7.31784 2.79918 7.35213 2.59536 7.38927C2.39535 7.42547 2.12486 7.45119 1.7258 7.49119L1.82009 8.43985C2.20201 8.40175 2.51917 8.37032 2.76394 8.32651C3.0049 8.28365 3.24968 8.21697 3.44969 8.06362L2.87157 7.30641ZM3.05443 6.86446C3.06563 6.94771 3.05462 7.03244 3.0225 7.11006C2.99038 7.18767 2.93831 7.25542 2.87157 7.30641L3.44969 8.06362C3.64993 7.91064 3.80615 7.70742 3.90249 7.47457C3.99884 7.24172 4.03189 6.98658 3.99829 6.73683L3.05443 6.86446ZM2.37535 5.92247C2.62965 6.23297 2.80204 6.44442 2.91823 6.61111C3.03633 6.7816 3.05157 6.84732 3.05443 6.86446L3.99829 6.73683C3.96495 6.48728 3.83923 6.26822 3.69922 6.06724C3.55731 5.86246 3.35635 5.61768 3.11253 5.31955L2.37535 5.92247ZM1.84104 5.11096C1.88866 5.26336 1.96676 5.39289 2.05343 5.51481C2.13724 5.63196 2.24773 5.76722 2.37535 5.92247L3.11253 5.31955C3.01471 5.20301 2.92038 5.08358 2.82966 4.96142C2.79545 4.91915 2.76784 4.87195 2.74775 4.82141L1.84104 5.11096ZM1.89057 4.10896C1.75348 4.42599 1.73589 4.78196 1.84104 5.11096L2.74775 4.82141C2.71306 4.71186 2.71915 4.59346 2.76489 4.48805L1.89057 4.10896ZM2.50393 3.3546C2.36106 3.49652 2.23725 3.61939 2.14201 3.72893C2.03872 3.84159 1.95386 3.96984 1.89057 4.10896L2.76489 4.48805C2.78983 4.43968 2.82194 4.39441 2.86014 4.35565C2.96217 4.24293 3.06795 4.13365 3.17729 4.028L2.50393 3.3546ZM3.35445 2.5031L2.50393 3.3546L3.17729 4.028L4.02781 3.17649L3.35445 2.5031ZM4.10877 1.89066C3.96969 1.95403 3.84145 2.03888 3.72875 2.14211C3.62017 2.23736 3.49636 2.36022 3.35445 2.5031L4.02781 3.17649C4.17925 3.026 4.27639 2.92885 4.35545 2.85932C4.43164 2.79265 4.46783 2.7736 4.48783 2.76407L4.10877 1.89066ZM5.11167 1.84018C4.78228 1.73508 4.42595 1.75302 4.10877 1.89066L4.48783 2.76407C4.59324 2.71833 4.71164 2.71319 4.82118 2.74788L5.11167 1.84018ZM5.92314 2.37546C5.76694 2.24783 5.63265 2.13735 5.51455 2.05353C5.39232 1.96165 5.25636 1.88964 5.11167 1.84018L4.82118 2.74788C4.87199 2.76759 4.91952 2.79488 4.96214 2.82884C5.04786 2.89075 5.15453 2.97743 5.32025 3.11268L5.92314 2.37546ZM6.86414 3.05458C6.84699 3.05172 6.78127 3.03553 6.61079 2.91742C6.3754 2.74441 6.14604 2.56429 5.92314 2.37546L5.32025 3.11268C5.61741 3.35651 5.86314 3.55748 6.06696 3.6994C6.26696 3.83846 6.48793 3.96419 6.73746 3.99848L6.86414 3.05458ZM7.30606 2.87075C7.25518 2.93767 7.18749 2.98993 7.10987 3.02222C7.03225 3.05451 6.94747 3.06567 6.86414 3.05458L6.73746 3.99848C6.98735 4.03226 7.24172 3.99834 7.47475 3.90198C7.70777 3.80562 7.91114 3.6493 8.06419 3.4489L7.30606 2.87075ZM7.49179 1.72588C7.45178 2.12401 7.42512 2.39547 7.38892 2.59453C7.35178 2.79836 7.31749 2.85646 7.30606 2.87075L8.06419 3.4489C8.21658 3.24888 8.28325 3.0041 8.32611 2.76312C8.36992 2.51833 8.4023 2.20307 8.4404 1.82017L7.49179 1.72588ZM7.68798 0.773407C7.61465 0.916278 7.5775 1.06201 7.55274 1.20964C7.52893 1.35251 7.51179 1.52491 7.49179 1.72588L8.43945 1.82113C8.45266 1.66918 8.47045 1.51767 8.49278 1.3668C8.49879 1.31291 8.51292 1.26025 8.53469 1.21059L7.68798 0.773407ZM8.43278 0.100009C8.11106 0.227197 7.84642 0.465857 7.68798 0.773407L8.53469 1.21059C8.58735 1.10819 8.67532 1.02833 8.78232 0.985808L8.43278 0.100009ZM9.39854 0C9.19758 0 9.02329 -8.87058e-09 8.87852 0.00952471C8.72606 0.0156889 8.57558 0.0462375 8.43278 0.100009L8.78232 0.985808C8.83406 0.969221 8.888 0.960551 8.94233 0.960091C9.0471 0.952472 9.1852 0.952471 9.3995 0.952471L9.39854 0ZM10.6024 0H9.39854V0.952471H10.6024V0ZM11.5691 0.100009C11.4256 0.0464301 11.2745 0.0158911 11.1215 0.00952471C10.9777 -8.87058e-09 10.8034 0 10.6024 0V0.952471C10.8158 0.952471 10.9529 0.952472 11.0586 0.960091C11.1129 0.96086 11.1668 0.969523 11.2186 0.985808L11.5691 0.100009ZM12.313 0.773407C12.1544 0.466215 11.8897 0.226962 11.5682 0.100009L11.2186 0.985808C11.3256 1.02833 11.4136 1.10819 11.4663 1.21059L12.313 0.773407ZM13.334 10C13.334 10.8841 12.9828 11.7321 12.3576 12.3572C11.7325 12.9824 10.8846 13.3336 10.0005 13.3336V14.2861C11.1372 14.2861 12.2273 13.8345 13.0311 13.0307C13.8348 12.2269 14.2864 11.1367 14.2864 10H13.334ZM10.0005 6.66635C10.8846 6.66635 11.7325 7.01757 12.3576 7.64275C12.9828 8.26793 13.334 9.11586 13.334 10H14.2864C14.2864 8.86325 13.8348 7.77306 13.0311 6.96925C12.2273 6.16545 11.1372 5.71388 10.0005 5.71388V6.66635ZM6.66698 10C6.66698 9.11586 7.01819 8.26793 7.64334 7.64275C8.26849 7.01757 9.11638 6.66635 10.0005 6.66635V5.71388C8.86378 5.71388 7.77364 6.16545 6.96987 6.96925C6.16611 7.77306 5.71456 8.86325 5.71456 10H6.66698ZM10.0005 13.3336C9.11638 13.3336 8.26849 12.9824 7.64334 12.3572C7.01819 11.7321 6.66698 10.8841 6.66698 10H5.71456C5.71456 11.1367 6.16611 12.2269 6.96987 13.0307C7.77364 13.8345 8.86378 14.2861 10.0005 14.2861V13.3336Z" fill="white" />
                            </svg>
                            <b>Setting</b>
                        </Link>
                        <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.88845 3.99935H12.7773V10.5327H13.8885V3.99935C13.8885 3.64573 13.7714 3.30659 13.563 3.05654C13.3546 2.80649 13.072 2.66602 12.7773 2.66602H3.88845C3.59377 2.66602 3.31115 2.80649 3.10278 3.05654C2.89441 3.30659 2.77734 3.64573 2.77734 3.99935V19.9993C2.77734 20.353 2.89441 20.6921 3.10278 20.9422C3.31115 21.1922 3.59377 21.3327 3.88845 21.3327H12.7773C13.072 21.3327 13.3546 21.1922 13.563 20.9422C13.7714 20.6921 13.8885 20.353 13.8885 19.9993H3.88845V3.99935Z" fill="white" />
                                <path d="M15.6436 11.5197C15.5373 11.4105 15.4006 11.3534 15.2608 11.3599C15.121 11.3664 14.9884 11.4359 14.8894 11.5546C14.7905 11.6734 14.7325 11.8325 14.7271 12.0003C14.7217 12.1681 14.7693 12.3321 14.8603 12.4597L16.7381 14.6663H8.68251C8.53517 14.6663 8.39386 14.7366 8.28967 14.8616C8.18548 14.9866 8.12695 15.1562 8.12695 15.333C8.12695 15.5098 8.18548 15.6794 8.28967 15.8044C8.39386 15.9294 8.53517 15.9997 8.68251 15.9997H16.7381L14.8603 18.3063C14.8021 18.3661 14.7549 18.4397 14.7215 18.5224C14.6882 18.6051 14.6695 18.6952 14.6665 18.787C14.6636 18.8788 14.6764 18.9703 14.7044 19.0559C14.7323 19.1414 14.7747 19.2191 14.8288 19.2841C14.883 19.3491 14.9477 19.3999 15.019 19.4334C15.0903 19.467 15.1666 19.4824 15.2431 19.4789C15.3196 19.4753 15.3947 19.4528 15.4636 19.4128C15.5325 19.3728 15.5938 19.3161 15.6436 19.2463L18.8881 15.3797L15.6436 11.5197Z" fill="white" />
                            </svg>
                            <b> Logout</b>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Main content --> */}
            <div className="sticky top-0 z-10 flex flex-col flex-1 overflow-y-auto">
                  <NavbarComponent/>
                <div className="p-4">

                </div>
            </div>
          

        </div>

    )
}
export default SidebarComponent;