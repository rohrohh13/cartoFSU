import { useNavStore } from '../../NavStore'
import styles from './Filters.module.scss'

const Filters = ({categories, selectedCategoriesId, onSelected, unSelect}) => {

    const setCurrentNav = useNavStore((state => state.setCurrentNav))


    const categorySVGs = {
        "Tractage": <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.22705 2.93128H2.96595V5.19238V23.2812V25.5423H5.22705H23.3159H25.577V23.2812V5.19238V2.93128H23.3159H5.22705Z" fill="#" stroke="#" stroke-width="4.5222"/>
        <path d="M18.2283 11.5234C19.0904 12.0406 19.8038 12.7723 20.2991 13.6471C20.7944 14.522 21.0547 15.5102 21.0546 16.5155V19.4373" stroke="black" stroke-width="1.13055" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5324 8.69702H9.74911C9.59919 8.69702 9.45541 8.75658 9.3494 8.86259C9.24339 8.9686 9.18384 9.11238 9.18384 9.2623V16.6109" stroke="black" stroke-width="1.13055" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5991 19.4373L15.0262 17.0348C14.8418 16.7104 14.7931 16.3262 14.8909 15.9661C14.9887 15.6059 15.225 15.2991 15.5481 15.1125C15.8713 14.9259 16.2552 14.8747 16.616 14.9701C16.9767 15.0655 17.2851 15.2997 17.4739 15.6216L18.2285 16.7741V9.2623C18.2285 9.11238 18.169 8.9686 18.063 8.86259C17.9569 8.75658 17.8132 8.69702 17.6632 8.69702H16.5327" stroke="black" stroke-width="1.13055" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> ,
        "Réunion publique": <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.85474 2.74523H3.3424V5.25757V25.3562V27.8686H5.85474H25.9534H28.4657V25.3562V5.25757V2.74523H25.9534H5.85474Z" fill="#" stroke="#" stroke-width="5.02467"/>
        <path d="M20.9287 14.6787C21.6601 14.6782 22.3816 14.8482 23.0357 15.1753C23.6899 15.5024 24.2588 15.9775 24.6972 16.563" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.11084 16.563C7.54924 15.9775 8.11813 15.5024 8.77231 15.1753C9.42649 14.8482 10.1479 14.6782 10.8793 14.6787" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.9041 19.7034C17.6385 19.7034 19.0445 18.2974 19.0445 16.563C19.0445 14.8286 17.6385 13.4226 15.9041 13.4226C14.1697 13.4226 12.7637 14.8286 12.7637 16.563C12.7637 18.2974 14.1697 19.7034 15.9041 19.7034Z" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.5073 22.2157C11.9582 21.4506 12.6009 20.8164 13.372 20.3757C14.1431 19.9351 15.0158 19.7034 15.9039 19.7034C16.792 19.7034 17.6647 19.9351 18.4358 20.3757C19.2069 20.8164 19.8496 21.4506 20.3005 22.2157" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.4949 11.5383C18.6123 11.0834 18.855 10.6705 19.1953 10.3466C19.5357 10.0227 19.96 9.80067 20.4201 9.7058C20.8803 9.61093 21.3578 9.647 21.7985 9.80991C22.2392 9.97282 22.6254 10.256 22.9132 10.6274C23.201 10.9988 23.3789 11.4434 23.4267 11.9108C23.4745 12.3782 23.3903 12.8496 23.1836 13.2716C22.9769 13.6935 22.6561 14.049 22.2575 14.2978C21.8589 14.5465 21.3985 14.6785 20.9287 14.6787" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.8792 14.6787C10.4094 14.6785 9.94904 14.5465 9.55045 14.2978C9.15185 14.049 8.83099 13.6935 8.62431 13.2716C8.41763 12.8496 8.3334 12.3782 8.3812 11.9108C8.429 11.4434 8.6069 10.9988 8.89471 10.6274C9.18252 10.256 9.5687 9.97282 10.0094 9.80991C10.4501 9.647 10.9276 9.61093 11.3878 9.7058C11.8479 9.80067 12.2723 10.0227 12.6126 10.3466C12.9529 10.6705 13.1956 11.0834 13.3131 11.5383" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> ,
        "Audience": <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.71899 3.03576H3.20666V5.5481V25.6468V28.1591H5.71899H25.8177H28.33V25.6468V5.5481V3.03576H25.8177H5.71899Z" fill="#" stroke="#" stroke-width="5.02467"/>
        <path d="M18.9087 18.1096C21.6838 18.1096 23.9334 15.86 23.9334 13.085C23.9334 10.3099 21.6838 8.0603 18.9087 8.0603C16.1337 8.0603 13.884 10.3099 13.884 13.085C13.884 15.86 16.1337 18.1096 18.9087 18.1096Z" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.4614 16.6377L15.3562 9.53247" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.2561 18.7377L13.8842 18.1096" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.9625 13.988L8.35293 21.6428C8.26433 21.7637 8.22188 21.9123 8.23326 22.0617C8.24463 22.2112 8.30908 22.3517 8.41495 22.4577L9.53765 23.5804C9.64374 23.6863 9.7842 23.7508 9.93365 23.7621C10.0831 23.7735 10.2317 23.7311 10.3526 23.6425L18.0058 18.0313" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> ,
        "Tour de France": <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5068 4.38312V2.38312H20.5068H4.50684H2.50684V4.38312V20.3831V22.3831H4.50684H20.5068H22.5068V20.3831V4.38312Z" fill="#" stroke="#" stroke-width="4"/>
        <path d="M14.6695 9.08144C15.3378 9.08144 15.8797 8.5441 15.8797 7.88127C15.8797 7.21843 15.3378 6.68109 14.6695 6.68109C14.0011 6.68109 13.4592 7.21843 13.4592 7.88127C13.4592 8.5441 14.0011 9.08144 14.6695 9.08144Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.8477 17.2427C17.9172 17.2427 18.7841 16.3829 18.7841 15.3224C18.7841 14.2618 17.9172 13.4021 16.8477 13.4021C15.7783 13.4021 14.9114 14.2618 14.9114 15.3224C14.9114 16.3829 15.7783 17.2427 16.8477 17.2427Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.13412 17.2427C9.20355 17.2427 10.0705 16.3829 10.0705 15.3224C10.0705 14.2618 9.20355 13.4021 8.13412 13.4021C7.06469 13.4021 6.19775 14.2618 6.19775 15.3224C6.19775 16.3829 7.06469 17.2427 8.13412 17.2427Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.3637 11.4818H13.9433L12.0069 9.56152L10.0706 11.4818L12.491 13.8822V16.7626" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        "Stage": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4V2H20H4H2V4V20V22H4H20H22V20V4Z" fill="#" stroke="#" stroke-width="4"/>
        <path d="M10.4462 14.4273C11.5461 14.4273 12.4376 13.5604 12.4376 12.4909C12.4376 11.4215 11.5461 10.5546 10.4462 10.5546C9.34641 10.5546 8.45483 11.4215 8.45483 12.4909C8.45483 13.5604 9.34641 14.4273 10.4462 14.4273Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.2967 16.3637C7.57914 15.7838 8.02507 15.2939 8.58261 14.9508C9.14016 14.6077 9.78641 14.4256 10.4462 14.4256C11.106 14.4256 11.7523 14.6077 12.3098 14.9508C12.8674 15.2939 13.3133 15.7838 13.5958 16.3637H17.4161C17.5482 16.3637 17.6748 16.3127 17.7682 16.2219C17.8615 16.1311 17.914 16.008 17.914 15.8796V7.16592C17.914 7.03753 17.8615 6.9144 17.7682 6.82361C17.6748 6.73283 17.5482 6.68182 17.4161 6.68182H6.46343C6.33139 6.68182 6.20476 6.73283 6.11139 6.82361C6.01803 6.9144 5.96558 7.03753 5.96558 7.16592V15.8796C5.96558 16.008 6.01803 16.1311 6.11139 16.2219C6.20476 16.3127 6.33139 16.3637 6.46343 16.3637H7.2967Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.9269 14.4273H15.9226V8.61819H7.95703V9.58638" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        "Ris": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4V2H20H4H2V4V20V22H4H20H22V20V4Z" fill="#" stroke="#" stroke-width="4"/>
        <path d="M16.6706 10.3488C16.6706 10.3488 14.627 9.7935 14.4625 11.1339C14.2979 12.4743 17.131 11.8562 16.947 13.3264C16.7755 14.6939 14.7402 14.1115 14.7402 14.1115" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.45557 13.0897H8.59753C8.97611 13.0897 9.33919 12.9393 9.60689 12.6716C9.87459 12.4039 10.025 12.0408 10.025 11.6622C10.025 11.2836 9.87459 10.9206 9.60689 10.6529C9.33919 10.3852 8.97611 10.2348 8.59753 10.2348H7.45557V14.2316" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.025 14.2317L9.2627 12.9255" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.4556 10.2348V14.2348" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> ,
        "Manifestation": <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.89307 3.43542H3.38073V5.94775V26.0464V28.5588H5.89307H25.9917H28.5041V26.0464V5.94775V3.43542H25.9917H5.89307Z" fill="#" stroke="#" stroke-width="5.02467"/>
        <path d="M9.66138 23.5341V10.9724" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.66138 19.8314C14.2293 15.7087 17.6552 23.9542 22.223 19.8314V10.9062C17.6552 15.0289 14.2293 6.78347 9.66138 10.9062" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> ,
        "Conférence de presse": <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.97583 3.12609H3.4635V5.63843V25.7371V28.2494H5.97583H26.0745H28.5868V25.7371V5.63843V3.12609H26.0745H5.97583Z" fill="#" stroke="#" stroke-width="5.02467"/>
        <path d="M17.9094 11.9182V21.3921C17.9095 21.4954 17.935 21.5971 17.9838 21.6881C18.0325 21.7792 18.103 21.8568 18.1889 21.9142L19.0525 22.4896C19.1363 22.5455 19.2323 22.5804 19.3324 22.5914C19.4324 22.6024 19.5337 22.5892 19.6276 22.5528C19.7215 22.5165 19.8053 22.4581 19.8719 22.3826C19.9385 22.3072 19.986 22.2168 20.0104 22.1191L21.0498 18.199" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.48828 21.3395C8.48831 21.4591 8.52249 21.5762 8.58681 21.677C8.65113 21.7779 8.74291 21.8583 8.85135 21.9087C8.95979 21.9592 9.0804 21.9777 9.19897 21.9619C9.31754 21.9462 9.42916 21.8969 9.52069 21.8199C13.6346 18.3686 17.9095 18.199 17.9095 18.199H21.05C21.8828 18.199 22.6816 17.8682 23.2706 17.2792C23.8595 16.6903 24.1904 15.8915 24.1904 15.0586C24.1904 14.2257 23.8595 13.427 23.2706 12.838C22.6816 12.2491 21.8828 11.9182 21.05 11.9182H17.9095C17.9095 11.9182 13.6346 11.7486 9.52069 8.29809C9.42921 8.22113 9.31767 8.17188 9.19916 8.15612C9.08066 8.14036 8.96012 8.15874 8.85171 8.20912C8.74329 8.25949 8.6515 8.33976 8.58713 8.44049C8.52275 8.54123 8.48846 8.65824 8.48828 8.77779V21.3395Z" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> ,
        "Assemblée générale": <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.58643 3.12585H3.07409V5.63818V25.7369V28.2492H5.58643H25.6851H28.1974V25.7369V5.63818V3.12585H25.6851H5.58643Z" fill="#" stroke="#" stroke-width="5.02467"/>
        <path d="M8.09863 23.2243C8.53741 22.6393 9.10638 22.1644 9.76048 21.8374C10.4146 21.5104 11.1358 21.3401 11.8671 21.3401C12.5984 21.3401 13.3197 21.5104 13.9738 21.8374C14.6279 22.1644 15.1969 22.6393 15.6356 23.2243C16.0744 22.6393 16.6434 22.1644 17.2975 21.8374C17.9516 21.5104 18.6728 21.3401 19.4041 21.3401C20.1354 21.3401 20.8567 21.5104 21.5108 21.8374C22.1649 22.1644 22.7339 22.6393 23.1726 23.2243" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.09863 15.0593C8.53741 14.4743 9.10638 13.9994 9.76048 13.6724C10.4146 13.3453 11.1358 13.175 11.8671 13.175C12.5984 13.175 13.3197 13.3453 13.9738 13.6724C14.6279 13.9994 15.1969 14.4743 15.6356 15.0593C16.0744 14.4743 16.6434 13.9994 17.2975 13.6724C17.9516 13.3453 18.6728 13.175 19.4041 13.175C20.1354 13.175 20.8567 13.3453 21.5108 13.6724C22.1649 13.9994 22.7339 14.4743 23.1726 15.0593" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.8671 21.3401C13.2546 21.3401 14.3794 20.2153 14.3794 18.8278C14.3794 17.4402 13.2546 16.3154 11.8671 16.3154C10.4795 16.3154 9.35474 17.4402 9.35474 18.8278C9.35474 20.2153 10.4795 21.3401 11.8671 21.3401Z" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.8671 13.1751C13.2546 13.1751 14.3794 12.0502 14.3794 10.6627C14.3794 9.2752 13.2546 8.15039 11.8671 8.15039C10.4795 8.15039 9.35474 9.2752 9.35474 10.6627C9.35474 12.0502 10.4795 13.1751 11.8671 13.1751Z" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.4042 21.3401C20.7917 21.3401 21.9165 20.2153 21.9165 18.8278C21.9165 17.4402 20.7917 16.3154 19.4042 16.3154C18.0167 16.3154 16.8918 17.4402 16.8918 18.8278C16.8918 20.2153 18.0167 21.3401 19.4042 21.3401Z" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.4042 13.1751C20.7917 13.1751 21.9165 12.0502 21.9165 10.6627C21.9165 9.2752 20.7917 8.15039 19.4042 8.15039C18.0167 8.15039 16.8918 9.2752 16.8918 10.6627C16.8918 12.0502 18.0167 13.1751 19.4042 13.1751Z" stroke="black" stroke-width="1.25617" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> ,
      };

    
    return (
        <div className={styles.container}>
            <div className={styles.containerFiltre}>
                <svg onClick={() => setCurrentNav('')} className={styles.closeFilters} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.closeBtnCircle} d="M11.5 22C17.299 22 22 17.299 22 11.5C22 5.70101 17.299 1 11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22Z" fill="#FFED00" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className={styles.closeBtnStroke} d="M14.9998 7.99876L7.99976 14.9988" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className={styles.closeBtnStroke} d="M7.99976 7.99876L14.9998 14.9988" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>  
                <div>
                    <h2>Filtrer par type d’évènement</h2>
                    <svg onClick={unSelect} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.unSelectCircle}  d="M11.5 22C17.299 22 22 17.299 22 11.5C22 5.70101 17.299 1 11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22Z" fill="#FFED00" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className={styles.unSelectArrow} d="M7.5 7.50002C7.5 7.50002 9.00002 6 11.5 6C15.0001 6 17.0001 9.50004 17.0001 9.50004" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className={styles.unSelectArrow} d="M15.5001 15.4998C15.5001 15.4998 14.0001 16.9998 11.5001 16.9998C8.00002 16.9998 6 13.4998 6 13.4998" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className={styles.unSelectArrow} d="M14 9.50004H17V6.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className={styles.unSelectArrow} d="M9.00004 13.4998H6V16.4998" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                </div>
                <ul>
                    {categories.map(category => (
                    <li key={category.id} onClick={() => onSelected(category.id)} style={selectedCategoriesId.includes(category.id) ? { backgroundColor: '#FFEB81' } : {}}>
                        {category.name}
                        {categorySVGs[category.name]}            
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filters