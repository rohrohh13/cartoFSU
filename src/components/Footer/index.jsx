import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerUn}>
                <a href="" target="_blank">
                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.13373 1.71488C8.3577 1.39733 10.6809 1.58027 12.9199 1.58027C13.2213 0.928467 14.3754 0.473892 14.9121 0.58414C17.1042 1.03441 19.2304 2.08076 21.4492 2.32063C22.1228 2.39345 22.8106 2.67532 23.429 2.95331C24.2633 3.32838 26.2409 3.89325 26.9155 4.6225C27.194 4.92357 27.04 5.79249 27.04 6.14362V10.6531C27.04 12.7954 27.492 15.6606 26.7785 17.7337C26.0832 19.7538 24.7848 21.3314 23.1302 22.4721C21.7905 23.3956 20.4354 24.3229 18.9464 24.9489C17.7003 25.4728 15.9409 24.9365 14.6631 24.8412C11.9407 24.6382 9.19629 23.9726 6.51973 23.3874C5.45193 23.1539 4.80598 22.8625 3.92979 22.2836C2.66136 21.4456 1.64756 20.1058 0.816892 18.7837C-0.0506236 17.403 0.144505 16.029 0.144505 14.4088C0.144505 13.5022 -0.21165 11.6655 0.194311 10.7877C0.769667 9.54372 1.57443 8.36433 2.03715 7.04552C2.52168 5.66455 3.22571 4.69964 4.15392 3.59945C4.63538 3.02879 5.35726 1.82575 6.13373 1.71488Z" fill="#FF4B56"/>
                <path d="M12.5868 7.43644C13.8033 7.47297 15.0193 7.47892 16.2361 7.47985C16.8269 7.47152 17.5328 7.13652 17.9824 7.73054C18.4652 8.3686 18.6639 9.13589 18.9798 9.88728C19.2017 10.415 19.1781 10.8378 19.2519 11.4123C19.3543 12.2095 19.4083 13.2017 19.2771 13.9938C19.1033 15.0425 18.9207 16.6062 18.1083 17.3869C17.2004 18.2593 16.0368 18.5578 14.8538 18.5578C13.8696 18.5578 12.839 18.6503 11.8614 18.536C11.0189 18.4376 9.94409 18.3875 9.14092 18.1112C8.76895 17.9833 7.85197 17.6235 7.71017 17.1636C7.60385 16.8187 7.69002 16.3054 7.69002 15.949V14.1136C7.69002 13.326 7.57457 12.4494 7.73536 11.6846C7.79515 11.4002 7.75633 11.121 7.7807 10.8349C7.82928 10.2648 8.116 9.69886 8.33487 9.19015C8.44385 8.93684 8.59615 8.35019 8.86888 8.18803C10.0871 7.46368 11.1443 7.39312 12.5868 7.43644Z" fill="white"/>
                <path d="M17.1209 7.48001C15.6086 7.48001 14.0982 7.48182 12.5868 7.43644C11.1443 7.39312 10.0871 7.46368 8.86888 8.18803C8.59615 8.35019 8.44385 8.93684 8.33487 9.19015C8.116 9.69886 7.82928 10.2648 7.7807 10.8349C7.75633 11.121 7.79515 11.4002 7.73536 11.6846C7.57457 12.4494 7.69002 13.326 7.69002 14.1136C7.69002 14.7254 7.69002 15.3372 7.69002 15.949C7.69002 16.3054 7.60385 16.8187 7.71017 17.1636C7.85197 17.6235 8.76895 17.9833 9.14092 18.1112C9.94409 18.3875 11.0189 18.4376 11.8614 18.536C12.839 18.6503 13.8696 18.5578 14.8538 18.5578C16.0368 18.5578 17.2004 18.2593 18.1083 17.3869C18.9207 16.6062 19.1033 15.0425 19.2771 13.9938C19.4083 13.2017 19.3543 12.2095 19.2519 11.4123C19.1781 10.8378 19.2017 10.415 18.9798 9.88728C18.6639 9.13589 18.4652 8.3686 17.9824 7.73054C17.5272 7.12912 16.8092 7.48001 16.2141 7.48001" stroke="white" stroke-width="0.9" stroke-linecap="round"/>
                <path d="M16.7606 9.00235C16.8268 8.95553 16.7997 8.68535 16.9621 8.68554C17.256 8.51313 17.5865 8.62914 17.8686 8.68551C18.2664 8.76501 17.6765 10.0542 17.2139 10.0542C16.9369 10.0542 16.6599 9.81529 16.6599 9.53463C16.6599 9.33856 16.603 9.11395 16.7606 9.00235Z" fill="#FF4B56"/>
                <path d="M11.0249 13.1497C11.0249 11.9951 11.2353 12.0151 11.5874 11.2566C12.0429 10.2754 13.9684 11.0573 14.603 11.4922C15.2101 11.9083 15.5249 12.4047 15.5249 13.175C15.5249 14.0634 14.9257 15.6487 13.9468 15.6487C12.9968 15.6487 12.5718 15.3457 11.939 14.6642C11.6433 14.3458 11.0249 13.5971 11.0249 13.1497Z" fill="#FF4B56"/>
                </svg>
                </a>
                <a className={styles.footerUnMiddle} href="" target="_blank">
                    <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1726 0.910588C21.428 0.529005 24.7809 0 28.0732 0C29.2862 0.808726 27.1072 0.984526 28.5864 1.50661C32.2111 2.7859 34.9909 5.5803 38.5366 7.08603C40.6249 7.97282 41.118 11.5543 41.5995 13.4436C42.6045 17.3861 43.6146 20.4648 42.8412 24.5528C41.8461 29.8129 37.0518 33.3534 32.0632 35.0162C29.4945 35.8725 27.2403 36.6553 24.4639 36.6553H13.2057C11.4818 36.6553 9.47168 37.0498 7.92434 36.1752C5.3986 34.7476 3.59229 31.3392 2.08002 28.9732C0.960311 27.2214 0.137491 25.8851 0.440964 23.7912C1.04144 19.6479 1.11864 14.8598 2.80849 10.9602C3.96626 8.28838 5.92146 5.8449 7.87467 3.70858C10.3682 0.98124 14.8199 1.30357 18.1726 0.910588Z" fill="#FF4B56"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1232 15.9793C28.3372 15.9323 28.529 15.7926 28.6346 15.5813C28.7925 15.2656 28.7071 14.8918 28.4496 14.673C28.4359 14.6352 28.418 14.576 28.3985 14.4898C28.3413 14.2375 28.3 13.893 28.2581 13.4816C28.2501 13.4025 28.242 13.321 28.2338 13.238C28.2014 12.9096 28.1666 12.5578 28.1211 12.2392C28.0666 11.858 27.9844 11.4208 27.821 11.085C27.7894 11.0201 27.7551 10.9275 27.7038 10.7796L27.6886 10.7356L27.6886 10.7356C27.6449 10.6092 27.5905 10.4519 27.5269 10.2997C27.3962 9.98676 27.1459 9.48332 26.6119 9.24061C26.1278 9.02058 25.4347 8.81059 24.7363 8.70723C24.0648 8.60785 23.2444 8.58441 22.591 8.87483C22.2741 9.01565 21.9347 9.139 21.5627 9.2742C21.456 9.313 21.3466 9.35277 21.2343 9.3942C20.7501 9.57278 20.2245 9.77831 19.7459 10.0487C19.2644 10.3207 18.7948 10.6777 18.4471 11.1796C18.0922 11.692 17.8954 12.3107 17.8954 13.048C17.8954 13.363 17.8925 13.683 17.8895 14.0069L17.8895 14.0069C17.874 15.6753 17.8577 17.446 18.2402 19.1674C18.2694 19.2987 18.2972 19.4298 18.3237 19.5608H18.3141H18.3037H18.2933H18.283H18.2726H18.2622H18.2518H18.2415H18.2311H18.2207H18.2103H18.2H18.1896H18.1792H18.1688H18.1585H18.1481H18.1377H18.1273H18.117H18.1066H18.0962H18.0858H18.0755H18.0651H18.0547H18.0443H18.034H18.0236H18.0132H18.0028H17.9925H17.9821H17.9717H17.9613H17.951H17.9406H17.9302H17.9198H17.9095H17.8991H17.8887H17.8784H17.868H17.8576H17.8472H17.8369H17.8265H17.8161H17.8057H17.7954H17.785H17.7746H17.7642H17.7539H17.7435H17.7331H17.7227H17.7124H17.702H17.6916H17.6812H17.6709H17.6605H17.6501H17.6397H17.6294H17.619H17.6086H17.5982H17.5879H17.5775H17.5671H17.5567H17.5464H17.536H17.5256H17.5152H17.5049H17.4945H17.4841H17.4737H17.4634H17.453H17.4426H17.4322H17.4219H17.4115H17.4011H17.3907H17.3804H17.37H17.3596H17.3493H17.3389H17.3285H17.3181H17.3078H17.2974H17.287H17.2766H17.2663H17.2559H17.2455H17.2351H17.2248H17.2144H17.204H17.1936H17.1833H17.1729H17.1625H17.1521H17.1418H17.1314H17.121H17.1106H17.1003H17.0899H17.0795H17.0691H17.0588H17.0484H17.038H17.0276H17.0173H17.0069H16.9965H16.9861H16.9758H16.9654H16.955H16.9446H16.9343H16.9239H16.9135H16.9031H16.8928H16.8824H16.872H16.8616H16.8513H16.8409H16.8305H16.8202H16.8098H16.7994H16.789H16.7787H16.7683H16.7579H16.7475H16.7372H16.7268H16.7164H16.706H16.6957H16.6853H16.6749H16.6645H16.6542H16.6438H16.6334H16.623H16.6127H16.6023H16.5919H16.5815H16.5712H16.5608H16.5504H16.54H16.5297H16.5193H16.5089H16.4985H16.4882H16.4778H16.4674H16.457H16.4467H16.4363H16.4259H16.4155H16.4052H16.3948H16.3844H16.374H16.3637H16.3533H16.3429H16.3325H16.3222H16.3118H16.3014H16.2911H16.2807H16.2703H16.2599H16.2496H16.2392H16.2288H16.2184H16.2081H16.1977H16.1873H16.1769H16.1666H16.1562H16.1458H16.1354H16.1251H16.1147H16.1043H16.0939H16.0836H16.0732H16.0628H16.0524H16.0421H16.0317C15.8192 19.5608 15.6273 19.649 15.4907 19.7908C15.0907 19.8076 14.7716 20.1372 14.7716 20.5413C14.7716 20.6068 14.7671 20.7466 14.7605 20.9482L14.7605 20.9483C14.757 21.0558 14.7529 21.1809 14.7486 21.3217C14.7368 21.711 14.7246 22.1926 14.7241 22.6636C14.7237 23.1288 14.7344 23.607 14.7723 23.9812C14.7906 24.1623 14.8189 24.359 14.87 24.528C14.8946 24.6093 14.9377 24.7305 15.0176 24.8483C15.0925 24.9589 15.2796 25.1798 15.6138 25.2191C15.7436 25.2344 15.8449 25.2115 15.8813 25.2026C15.9284 25.1911 15.965 25.1774 15.9854 25.1692C16.0263 25.1527 16.0577 25.136 16.0717 25.1283C16.1026 25.1115 16.1286 25.0948 16.1423 25.0858C16.1731 25.0657 16.2064 25.0422 16.235 25.0218C16.2943 24.9792 16.3691 24.9237 16.4391 24.8716L16.4645 24.8527L16.4646 24.8526C16.5281 24.8053 16.5882 24.7606 16.6386 24.7238C16.6691 24.7016 16.6883 24.6881 16.6985 24.6808C16.7046 24.6766 16.7075 24.6745 16.7079 24.6741C17.0273 24.498 17.3799 24.3429 17.7634 24.1742C17.8935 24.117 18.0272 24.0582 18.1644 23.9964C18.3729 23.9026 18.5893 23.8207 18.8122 23.7492C18.868 24.9177 18.8752 26.1037 18.876 27.329C18.569 27.4234 18.3459 27.7093 18.3459 28.0472C18.3459 28.4621 18.6822 28.7984 19.0971 28.7984C19.2398 28.7984 19.4826 28.8218 19.8301 28.8553L19.8304 28.8553L20.0321 28.8747C20.4591 28.9153 20.9729 28.96 21.4666 28.966C21.9435 28.9718 22.4801 28.9439 22.9215 28.7985C23.1463 28.7245 23.4018 28.6025 23.6077 28.3885C23.8313 28.1559 23.9587 27.8526 23.9587 27.5111C23.9587 26.965 23.8075 26.4415 23.6522 26C23.5846 25.8079 23.5107 25.6168 23.4427 25.441L23.4427 25.441L23.4104 25.3573C23.3317 25.1531 23.263 24.9709 23.208 24.7995C23.0476 24.2994 22.9087 23.7858 22.781 23.2635C23.1662 23.2584 23.5512 23.2584 23.9318 23.2584H23.962C24.08 23.2584 24.1868 23.2662 24.3195 23.276H24.3195L24.3195 23.276C24.4166 23.2831 24.5275 23.2912 24.6667 23.298C24.9345 23.3112 25.2981 23.3167 25.6378 23.2196C26.139 23.0764 26.3206 22.6392 26.3816 22.3964C26.4472 22.1348 26.4434 21.8582 26.4218 21.6373C26.3993 21.4076 26.3512 21.1769 26.2894 20.9839C26.2589 20.8886 26.2193 20.7842 26.1681 20.6867L26.1674 20.6855C26.1628 20.6767 26.1565 20.6646 26.1483 20.65C26.0664 20.1066 25.964 19.7001 25.8154 19.4225C25.731 19.2648 25.5758 19.0417 25.2976 18.9265C25.1215 18.8536 24.9553 18.8471 24.814 18.8703C24.7396 18.8456 24.6601 18.8322 24.5774 18.8322C24.4581 18.8322 24.3453 18.86 24.2452 18.9095C23.6769 18.9326 23.1279 19.1106 22.6893 19.2528L22.635 19.2704C22.4494 19.3304 22.2803 19.3842 22.1229 19.4286C22.0462 18.6744 21.969 17.7885 21.9174 16.9066C21.8553 15.8475 21.8328 14.8352 21.8863 14.0923C21.908 13.7912 21.9404 13.5639 21.9771 13.4071C22.1367 13.4111 22.2398 13.4406 22.3079 13.4714C22.4065 13.5161 22.5012 13.5948 22.607 13.7541C22.7207 13.9254 22.8232 14.152 22.9495 14.4657C22.9741 14.5269 22.9998 14.5917 23.0265 14.6593L23.0269 14.6601C23.1281 14.916 23.2451 15.2117 23.3824 15.5016C23.4367 15.6163 23.4738 15.7382 23.5227 15.9155L23.5348 15.9596C23.5785 16.119 23.6363 16.3299 23.7264 16.5438L23.737 16.5696C23.7605 16.6269 23.8047 16.7347 23.8468 16.8084C23.8794 16.8655 23.9543 16.9861 24.0947 17.0857C24.2566 17.2006 24.4258 17.233 24.554 17.2351C24.6516 17.2368 24.7358 17.2202 24.7617 17.2152L24.7646 17.2146C24.7943 17.2088 24.8028 17.207 24.8094 17.2055C24.8158 17.2041 24.8205 17.2031 24.8414 17.1992C24.8758 17.1928 24.9289 17.1844 25.016 17.1819C25.3608 17.172 25.9871 17.1402 26.5772 16.9961C26.8717 16.9241 27.1958 16.8153 27.4814 16.6415C27.7185 16.4971 27.9659 16.2845 28.1232 15.9793ZM28.4711 14.7226C28.4711 14.7228 28.4696 14.7204 28.4669 14.715C28.4698 14.7197 28.4712 14.7224 28.4711 14.7226ZM25.2847 20.2576L25.2813 20.2603C25.2836 20.2584 25.2847 20.2575 25.2847 20.2576Z" fill="white"/>
                    </svg>              
                </a>
                <a href="" target="_blank">
                    <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.84869 5.509C6.72928 3.79504 8.50741 2.25722 10.9317 1.88559C11.1438 1.40412 11.4091 1.00415 11.7526 0.873278C14.4934 -0.170821 17.1087 0.0123586 19.9976 0.0123586C24.6725 0.0123586 27.4637 2.35281 31.4378 4.41629C33.4266 5.44893 35.2365 6.27682 36.6365 8.05864C37.8585 9.61392 38.6916 12.1826 39.3517 14.0685C40.0793 16.1475 40.6762 17.4487 40.6762 19.6148C40.6762 20.7175 39.9132 22.5362 39.4841 23.6214C38.7447 25.4917 38.1745 27.3343 36.802 28.9028C35.0524 30.9024 32.5154 32.2791 30.4445 33.9359C28.0194 35.876 25.7855 36.1997 22.5969 36.4359C19.2346 36.6849 15.2713 37.7904 12.1499 36.1875C9.7831 34.9721 7.38958 33.7784 5.27915 32.1313C3.35124 30.6266 0.332749 27.7233 0.163302 25.0121C-0.0475576 21.6384 0.472483 18.5478 0.875216 15.2109C1.08293 13.4899 1.04579 11.6817 1.35534 9.97915C1.6587 8.31069 3.68802 6.56682 4.84869 5.509Z" fill="#FF4B56"/>
                        <path d="M17.7016 15.2079C18.7198 15.7077 19.6523 15.871 20.7719 15.871C20.9505 15.3449 20.8583 14.8056 21.0448 14.2769C21.3272 13.4759 21.865 12.9569 22.6209 12.5487C23.7898 11.9176 26.3339 11.6673 27.0625 13.098C27.1483 13.2663 27.0976 13.8108 27.2809 13.8214C27.6702 13.8439 27.7454 13.6558 28.045 13.4597C28.2544 13.3227 30.4603 12.1241 30.4603 12.6827C30.4603 13.2316 29.3939 13.8799 29.0002 14.1161C28.5566 14.3823 27.9918 14.6823 27.6087 15.0271C27.3014 15.3035 27.9308 15.2146 28.0931 15.2146C28.6778 15.2146 28.9909 15.2126 29.9041 15.2146C30.2952 15.2146 30.7653 15.0219 31.1562 15.0271C31.8586 15.0364 32.0524 15.0456 31.5179 15.3955C30.6666 15.9526 29.713 16.8609 28.6932 17.0834C27.9987 17.2349 28.1405 18.1008 28.1405 18.7646C28.1405 19.6528 28.185 20.4523 27.9222 21.2965C27.6381 22.2095 26.9603 23.1085 26.4826 23.9423C26.0761 24.6518 25.7812 25.3921 25.1317 25.9317C24.5522 26.413 23.8416 26.6664 23.153 26.9632C22.4878 27.2499 21.7842 27.6866 21.0448 27.6866C19.1366 27.6866 17.3793 27.5835 15.5183 27.1775C14.5853 26.974 13.6756 26.51 12.8846 25.9987C12.0543 25.4619 11.3963 24.6593 10.5785 24.1433C10.4732 24.0768 9.76724 23.6007 9.7939 23.6007C10.0314 23.6007 10.1732 23.8285 10.4557 23.8285C11.8153 23.8285 12.8648 23.5474 14.1673 23.1318C15.076 22.8419 16.0288 22.6425 16.9647 22.4754C17.588 22.3642 18.1925 22.0371 18.8069 21.8726C19.1177 21.7894 17.9179 21.7788 17.7016 21.7788C16.918 21.7788 16.1948 21.6553 15.4159 21.5377C14.5125 21.4012 13.3856 21.3128 12.5367 20.9282C11.3821 20.405 10.5697 19.5203 9.60286 18.7178C9.55389 18.6771 9.03028 18.1386 8.49702 17.7121C8.38603 17.6673 8.27481 17.6229 8.16324 17.5791C7.91567 17.4819 7.21292 17.3012 7.46048 17.204C7.67028 17.1216 8.0865 17.3837 8.49702 17.7121C9.20682 17.9983 9.90739 18.2991 10.6331 18.5503C11.2213 18.7539 11.9688 19.1263 12.6117 19.1263C12.7746 19.1263 12.4067 18.8763 12.3252 18.7379C11.8505 17.9313 11.5308 17.0015 11.0971 16.1658C10.8354 15.6614 10.5256 15.2773 10.2101 14.8127C9.93921 14.4138 10.3694 14.6396 10.5853 14.7323C11.2848 15.0328 11.9634 15.3827 12.6595 15.6902C12.8969 15.7951 13.762 16.3325 13.3486 15.8108C12.6777 14.964 12.6663 13.6852 12.6663 12.6693C12.6663 11.9087 12.5677 11.0902 12.7618 10.3518C12.8218 10.1235 12.7728 8.35898 13.0075 8.54325C13.1648 8.6668 13.1878 8.83582 13.2394 9.02551C13.4524 9.80749 13.7179 10.5142 14.0855 11.2359C14.341 11.7376 14.7049 12.0581 15.0611 12.4885C15.7695 13.3443 16.6953 14.714 17.7016 15.2079Z" fill="white" stroke="white" stroke-width="1.50249" stroke-linecap="round"/>
                    </svg>                 
                </a>
                <p>La FSU-SNUipp est le 1er syndicat de l’école publique !</p>
                <span>Ensemble pour l’école, les personnels et les élèves</span>
            </div>
            <div className={styles.footerDeux}>
                <a target='_blank' href='https://www.snuipp.fr/'>Snuipp.fr</a>
                <a target='_blank' href=''>mentions légales</a>
            </div>
        </footer>
    )
}

export default Footer