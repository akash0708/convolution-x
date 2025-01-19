import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdCall, MdLocationOn, MdOutlineEmail } from "react-icons/md";
interface MyComponentProps {
  headerText: string; // Custom text style
  listText: string; // Custom text style
  linkText: string; // Custom text style
  svgColor: string; // Custom text style
  iconColor: string; // Custom text style
}

const events = [
  { name: "Decisia", href: "/event/decisia" },
  { name: "Sparkhack", href: "/event/sparkhack" },
  { name: "Algomaniac", href: "/event/algomaniac" },
  { name: "Abol Tabol", href: "/event/aboltabol" },
  { name: "Circuistics", href: "/event/circuistics" },
  { name: "Inquizzitive", href: "/event/inquizitive" },
  { name: "Eureka", href: "/event/eureka" },
  { name: "JU Talks", href: "/event/jutalks" },
  { name: "24 Frames", href: "/event/24frames" },
];

const EventFooter: React.FC<MyComponentProps> = ({
  headerText,
  listText,
  svgColor,
  iconColor,
  linkText,
}) => {
  return (
    <>
      <div className="sm:grid maxWidthForSections  w-full grid-cols-2  md:grid-cols-3 mt-4 flex flex-col items-center gap-x-2 gap-y-8 text-shadow">
        {/* -----------------Logo And Socials------------- */}
        <div>
          <div className="flex sm:justify-start justify-center">
            <svg
              className={`lg:w-64 md:w-52 w-48 text-${svgColor}`}
              width="402"
              height="164"
              viewBox="0 0 402 164"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.9227 57.7834C49.8636 58.9658 47.4943 59.55 44.7983 59.55C41.9213 59.55 39.3545 58.8944 37.1168 57.5741C34.8721 56.2607 33.1233 54.3883 31.8752 51.9593C30.6247 49.5372 29.9972 46.7264 29.9972 43.5429C29.9972 40.3594 30.6247 37.4864 31.8752 35.085C33.1233 32.6836 34.8721 30.825 37.1168 29.5047C39.3545 28.1867 41.9213 27.5289 44.7983 27.5289C47.4943 27.5289 49.8636 28.1085 51.9227 29.2632C53.977 30.4156 55.566 32.15 56.7013 34.4617H68.1059C66.4488 29.5668 63.5483 25.7232 59.3902 22.9537C55.2392 20.182 50.3995 18.7973 44.8712 18.7973C40.1513 18.7973 35.8875 19.8439 32.0891 21.9486C28.2883 24.0509 25.2867 26.9883 23.0937 30.7514C20.8983 34.5169 19.7983 38.7838 19.7983 43.5429C19.7983 48.302 20.8983 52.5505 23.0937 56.2929C25.2867 60.0353 28.2883 62.9612 32.0891 65.0636C35.8875 67.1614 40.1513 68.2172 44.8712 68.2172C50.4442 68.2172 55.2957 66.8417 59.4302 64.0929C63.56 61.3442 66.4488 57.4959 68.1059 52.5505H56.7013C55.566 54.8645 53.977 56.608 51.9227 57.7834Z"
                fill="currentColor"
              />
              <path
                d="M121.472 30.7514C119.234 26.9883 116.188 24.0394 112.335 21.914C108.488 19.791 104.229 18.7237 99.5533 18.7237C94.8782 18.7237 90.6755 19.791 86.8042 21.914C82.9306 24.0394 79.8608 26.9883 77.5926 30.7514C75.3267 34.5169 74.1914 38.7562 74.1914 43.4716C74.1914 48.187 75.3267 52.4953 77.5926 56.2607C79.8608 60.0238 82.9306 62.9727 86.8042 65.0981C90.6755 67.2235 94.9229 68.2839 99.5533 68.2839C104.184 68.2839 108.431 67.2235 112.3 65.0981C116.171 62.9727 119.234 60.0238 121.472 56.2607C123.717 52.4953 124.84 48.2284 124.84 43.4716C124.84 38.7147 123.717 34.5169 121.472 30.7514ZM112.723 51.9984C111.449 54.4436 109.684 56.3274 107.416 57.6454C105.148 58.9657 102.524 59.6213 99.5533 59.6213C96.5823 59.6213 93.945 58.9657 91.6556 57.6454C89.3662 56.3274 87.5822 54.4436 86.3082 51.9984C85.0343 49.5487 84.3973 46.7057 84.3973 43.4716C84.3973 40.2375 85.0343 37.4036 86.3082 34.9815C87.5822 32.5525 89.3662 30.6916 91.6556 29.4012C93.945 28.1085 96.5753 27.4575 99.5533 27.4575C102.531 27.4575 105.148 28.1085 107.416 29.4012C109.684 30.6916 111.449 32.5525 112.723 34.9815C114.004 37.4036 114.637 40.2352 114.637 43.4716C114.637 46.708 114.004 49.5487 112.723 51.9984Z"
                fill="currentColor"
              />
              <path
                d="M218.12 19.4206L204.593 57.8892L190.995 19.4206H180.366L198.503 67.8031H210.54L228.674 19.4206H218.12Z"
                fill="currentColor"
              />
              <path
                d="M279.492 30.7514C277.252 26.9883 274.205 24.0394 270.353 21.914C266.505 19.791 262.246 18.7237 257.571 18.7237C252.896 18.7237 248.693 19.791 244.824 21.914C240.948 24.0394 237.878 26.9883 235.612 30.7514C233.349 34.5169 232.216 38.7562 232.216 43.4716C232.216 48.187 233.349 52.4953 235.612 56.2607C237.878 60.0238 240.948 62.9727 244.824 65.0981C248.693 67.2235 252.945 68.2839 257.571 68.2839C262.197 68.2839 266.449 67.2235 270.32 65.0981C274.194 62.9727 277.252 60.0238 279.492 56.2607C281.736 52.4953 282.858 48.2284 282.858 43.4716C282.858 38.7147 281.736 34.5169 279.492 30.7514ZM270.748 51.9984C269.474 54.4436 267.702 56.3274 265.433 57.6454C263.167 58.9657 260.549 59.6213 257.571 59.6213C254.593 59.6213 251.965 58.9657 249.673 57.6454C247.384 56.3274 245.602 54.4436 244.326 51.9984C243.052 49.5487 242.415 46.7057 242.415 43.4716C242.415 40.2375 243.052 37.4036 244.326 34.9815C245.602 32.5525 247.384 30.6916 249.673 29.4012C251.965 28.1085 254.597 27.4575 257.571 27.4575C260.544 27.4575 263.167 28.1085 265.433 29.4012C267.702 30.6916 269.474 32.5525 270.748 34.9815C272.022 37.4036 272.659 40.2352 272.659 43.4716C272.659 46.708 272.022 49.5487 270.748 51.9984Z"
                fill="currentColor"
              />
              <path
                d="M84.0471 136.135V95.447H74.1303V143.829H100.336V136.135H84.0471Z"
                fill="currentColor"
              />
              <path
                d="M136.461 95.447V125.393C136.461 128.671 135.587 131.178 133.842 132.91C132.094 134.645 129.612 135.51 126.403 135.51C123.195 135.51 120.785 134.645 119.037 132.91C117.288 131.178 116.418 128.671 116.418 125.393V95.447H106.497V125.32C106.497 129.433 107.371 132.91 109.12 135.753C110.869 138.597 113.243 140.733 116.237 142.162C119.239 143.597 122.579 144.315 126.262 144.315C129.945 144.315 133.379 143.597 136.426 142.162C139.472 140.733 141.902 138.597 143.719 135.753C145.536 132.91 146.451 129.433 146.451 125.32V95.447H136.461Z"
                fill="currentColor"
              />
              <path
                d="M164.568 12.7224V52.6287L142.112 19.3493H132.202V67.7916H142.112V34.6066L164.568 67.7916H174.483V3.02247L164.568 12.7224ZM366.103 77.8481L360.192 87.5481L358.901 89.6574L360.257 91.884L368.101 79.3341H372.071L362.215 95.1066L363.574 97.3401L374.823 79.3341L375.754 77.8481H366.103ZM379.727 77.8481L365.53 100.558L366.916 102.835L381.605 79.3341H385.57L368.872 106.056L370.233 108.289L389.265 77.8481H379.727ZM393.23 77.8481L372.189 111.507L373.545 113.738L395.052 79.3341H399.017L375.503 116.956L376.767 119.038L395.954 87.5481L399.367 81.9333L401.866 77.8481H393.23ZM396.088 154.185H396.072L386.844 139.054L376.633 122.288L375.289 124.528L398.954 162.404H394.988L373.343 127.769L371.996 130.017L392.236 162.404L393.167 163.89H402L396.088 154.185ZM370.05 133.26L368.7 135.507L385.507 162.404H381.541L366.757 138.746L365.379 141.039L379.663 163.89H389.201L370.05 133.26ZM374.762 162.404L363.435 144.278L362.088 146.525L372.01 162.404H368.045L360.145 149.764L358.997 151.676L358.932 151.784L358.885 151.857L360.311 154.185L366.199 163.89H375.693L374.762 162.404ZM375.554 120.547L361.136 96.834V96.8386L359.171 93.6206L359.176 93.6114L357.834 91.4032L357.829 91.4124L355.465 87.5481L349.553 77.8481L9.91208 77.7561V9.70456H161.141L171.06 0H0V87.4584L319.704 87.5481L339.947 120.772L319.591 154.185L179.29 154.093L169.375 163.798L349.464 163.89L355.352 154.185L357.371 150.889L357.352 150.877L375.554 120.547ZM352.877 141.985L345.442 154.185H329.525L349.863 120.772L329.637 87.5481H345.555L352.877 99.5644L357.829 107.719L362.582 115.505L362.707 115.705L365.8 120.772L357.829 133.833L352.877 141.985ZM153.399 95.4401V103.275H166.571V160.17L176.464 150.486V143.834H176.485V103.275H189.658V95.4401H153.399Z"
                fill="currentColor"
              />
              <path
                d="M196.878 95.447V143.829H206.793V95.447H196.878Z"
                fill="currentColor"
              />
              <path
                d="M261.44 106.78C259.195 103.015 256.149 100.066 252.303 97.9427C248.456 95.8173 244.192 94.7569 239.514 94.7569C234.837 94.7569 230.643 95.8173 226.767 97.9427C222.898 100.066 219.829 103.015 217.56 106.78C215.295 110.55 214.159 114.783 214.159 119.498C214.159 124.213 215.295 128.522 217.56 132.287C219.829 136.053 222.898 138.999 226.767 141.124C230.643 143.25 234.891 144.315 239.514 144.315C244.138 144.315 248.394 143.25 252.268 141.124C256.139 138.999 259.195 136.053 261.44 132.287C263.68 128.522 264.803 124.255 264.803 119.498C264.803 114.741 263.68 110.55 261.44 106.78ZM252.691 128.025C251.417 130.47 249.645 132.354 247.379 133.672C245.115 134.992 242.492 135.648 239.514 135.648C236.536 135.648 233.908 134.992 231.619 133.672C229.327 132.354 227.545 130.47 226.271 128.025C224.995 125.575 224.358 122.732 224.358 119.498C224.358 116.264 224.995 113.437 226.271 111.008C227.545 108.579 229.327 106.718 231.619 105.428C233.908 104.135 236.543 103.489 239.514 103.489C242.485 103.489 245.115 104.135 247.379 105.428C249.645 106.718 251.417 108.579 252.691 111.008C253.967 113.437 254.604 116.268 254.604 119.498C254.604 122.727 253.967 125.575 252.691 128.025Z"
                fill="currentColor"
              />
              <path
                d="M304.541 95.3757V128.648L282.087 95.3757H272.17V143.83H282.087V110.626L304.541 143.83H314.451V95.3757H304.541Z"
                fill="currentColor"
              />
              <path
                d="M396.088 154.185H396.072L386.844 139.054L386.86 139.038L396.088 154.185Z"
                fill="currentColor"
              />
              <path
                d="M32.2983 120.871L20.5528 133.495H30.0841L30.1311 133.541V125.851L31.4592 124.285V134.794H6.14657V132.545L23.5991 113.782C25.2021 112.061 25.2256 109.393 23.6555 107.712C22.7035 106.688 21.4343 106.095 20.1767 106.079C18.1153 106.053 15.7225 107.095 15.1819 110.113L13.875 109.89C14.552 106.113 17.6311 104.779 20.1039 104.779C20.1344 104.779 20.1673 104.781 20.1979 104.781C21.8174 104.8 23.4369 105.554 24.638 106.84C26.6618 109.014 26.6383 112.446 24.5816 114.661L7.05622 133.497H8.63576L25.5288 115.339C27.964 112.719 28.0016 108.662 25.6111 106.099C24.1679 104.551 22.2428 103.647 20.3272 103.622H20.2167C17.1657 103.622 13.3955 105.299 12.6504 110.056L11.3388 109.858C12.1662 104.581 16.4559 102.274 20.346 102.322C22.6236 102.355 24.8989 103.41 26.5913 105.225C29.4377 108.275 29.4025 113.101 26.509 116.213L10.4292 133.497H12.0087L27.4586 116.892C30.7282 113.375 30.7775 107.926 27.5691 104.484C25.6299 102.41 23.0467 101.198 20.48 101.163H20.3295C15.8636 101.163 11.0098 103.882 10.1213 110.003L8.80735 109.819C9.80631 102.927 15.2853 99.8634 20.3295 99.8634H20.4964C23.4298 99.9048 26.3633 101.269 28.5469 103.608C32.2137 107.541 32.1667 113.757 28.4364 117.766L13.7998 133.497H15.3794L29.3837 118.444C33.49 114.03 33.5488 107.192 29.52 102.872C27.0896 100.268 23.8482 98.7501 20.6257 98.7087C14.9234 98.6328 8.67807 102.081 7.58508 109.952L6.26645 109.777C7.46756 101.119 14.3381 97.3263 20.6398 97.4091C24.2314 97.4574 27.8206 99.1273 30.4955 101.996C34.9826 106.805 34.9262 114.414 30.3638 119.323L17.1751 133.499H18.7547L31.3087 119.999C36.2495 114.688 36.32 106.456 31.4709 101.26C28.5492 98.129 24.6498 96.3027 20.7714 96.2521H20.5458C13.7058 96.2521 6.31816 100.448 5.05124 109.906L3.7326 109.738C4.37194 104.963 6.56966 101.041 10.0813 98.3913C13.0876 96.1233 16.8884 94.9087 20.7879 94.9548C25.0329 95.0123 29.285 96.9904 32.4511 100.386C37.7609 106.076 37.688 115.075 32.2913 120.878L32.2983 120.871Z"
                fill="currentColor"
              />
              <path
                d="M30.1313 133.497L30.1311 133.541L30.0865 133.497H30.1313Z"
                fill="currentColor"
              />
              <path
                d="M33.7838 121.547V137.069H6.14657V135.77H32.4088L32.4558 135.816V123.114L33.7838 121.547Z"
                fill="currentColor"
              />
              <path
                d="M32.4559 135.77V135.817L32.4088 135.77L32.4559 135.77Z"
                fill="currentColor"
              />
              <path
                d="M36.1061 118.806V139.342H6.14657V138.042H34.7311L34.7781 138.088V120.372L36.1061 118.806Z"
                fill="currentColor"
              />
              <path
                d="M34.7782 138.042V138.089L34.7311 138.042H34.7782Z"
                fill="currentColor"
              />
              <path
                d="M40.7531 116.195V117.17L64.5872 117.195V118.495L40.7531 118.47V119.443L64.5872 119.468V120.768L40.7531 120.742V121.715L64.5872 121.741V123.04L40.7531 123.015V123.99L64.5872 124.016V125.315L40.7531 125.29V143.751H40.6638V143.889H6.14657V142.59H39.425V114.895L64.5872 114.921V116.22L40.7531 116.195Z"
                fill="currentColor"
              />
              <path
                d="M38.4284 116.068V141.614H6.14657V140.317H37.1027V117.635L38.4284 116.068Z"
                fill="currentColor"
              />
              <path
                d="M55.8269 147.344C55.8269 148.575 55.5213 149.75 54.9219 150.836C54.9055 150.875 54.8726 150.928 54.8397 150.979C53.521 153.249 51.0224 154.675 48.3311 154.675C47.445 154.675 46.5753 154.523 45.7455 154.224H45.7361L45.621 154.178C43.0754 153.207 41.2725 150.969 40.9106 148.336H40.8965L40.7343 147.1H42.1305L42.2104 148.149H42.2198C42.5113 150.286 43.9521 152.108 45.9971 152.927H45.9994L46.1146 152.973C46.8221 153.24 47.5672 153.375 48.3288 153.375C50.5429 153.375 52.5996 152.202 53.695 150.316C53.7208 150.275 53.7349 150.254 53.7443 150.236C54.245 149.327 54.4988 148.359 54.4988 147.344C54.4988 146.84 54.4354 146.344 54.3108 145.861H54.3084L54.2614 145.693C54.0993 145.118 53.843 144.568 53.5046 144.066L53.3941 143.901C52.6184 142.811 51.4855 141.992 50.188 141.596C49.591 141.412 48.9657 141.318 48.3288 141.318L42.6758 141.35V140.05L48.3241 140.018C49.0997 140.018 49.8613 140.131 50.5876 140.358C52.2259 140.858 53.655 141.913 54.5976 143.33L54.7104 143.51C55.0465 144.032 55.3051 144.595 55.486 145.182L55.5001 145.191L55.5495 145.375V145.391C55.7328 146.029 55.8245 146.684 55.8245 147.347L55.8269 147.344Z"
                fill="currentColor"
              />
              <path
                d="M58.2009 147.344C58.2009 148.911 57.7989 150.456 57.0139 151.94C56.981 152.004 56.941 152.067 56.9011 152.131C55.1617 155.128 51.871 157.005 48.3217 157.005C47.1371 157.005 45.9783 156.8 44.8735 156.396H44.8594L44.7442 156.354C41.4982 155.114 39.1665 152.308 38.5883 148.975C38.5718 148.874 38.5554 148.773 38.5413 148.669L38.5342 148.63L38.3321 147.1H39.7659L39.7847 147.344L39.8881 148.724V148.74C40.3793 151.595 42.3608 154.013 45.1274 155.103H45.1344L45.2472 155.149C46.2298 155.519 47.264 155.708 48.3194 155.708C51.3891 155.708 54.2403 154.082 55.7611 151.466C55.7987 151.409 55.8175 151.372 55.8363 151.34C56.5226 150.045 56.8729 148.699 56.8729 147.344C56.8729 146.629 56.7788 145.918 56.5931 145.23V145.223L56.5391 145.056C56.3134 144.257 55.9585 143.496 55.4908 142.799L55.3803 142.626C54.3084 141.09 52.7219 139.933 50.8932 139.369C50.0564 139.112 49.1914 138.983 48.317 138.983L42.6758 139.015V137.716L48.3147 137.683C49.3277 137.683 50.329 137.833 51.2927 138.132C53.4623 138.804 55.3427 140.195 56.579 142.049L56.6096 142.091C56.6166 142.104 56.6237 142.116 56.6284 142.13C57.1502 142.912 57.5404 143.76 57.7989 144.651C57.8154 144.683 57.8248 144.722 57.8366 144.759C58.0763 145.601 58.1985 146.47 58.1985 147.347L58.2009 147.344Z"
                fill="currentColor"
              />
              <path
                d="M60.5725 147.344C60.5725 149.29 60.0742 151.209 59.0988 153.051C59.0565 153.129 59.0095 153.203 58.9624 153.281C56.7976 157.007 52.7101 159.337 48.3052 159.337C46.8244 159.337 45.3789 159.078 43.9968 158.572H43.9827L43.8675 158.526C39.7048 156.938 36.7549 153.283 36.1649 148.975H36.1625V148.943L35.9134 147.1H37.3472L37.366 147.344L37.4718 148.773V148.803C38.003 152.605 40.5956 155.846 44.2553 157.279H44.2624L44.3776 157.325C45.6327 157.799 46.9537 158.04 48.3029 158.04C52.2329 158.04 55.8762 155.961 57.8177 152.616C57.8648 152.545 57.8906 152.499 57.9165 152.451C58.7932 150.797 59.2398 149.079 59.2398 147.344C59.2398 146.413 59.1176 145.49 58.8708 144.593L58.8637 144.586L58.8167 144.418C58.5252 143.395 58.074 142.422 57.4699 141.527L57.3594 141.354C55.9914 139.363 53.9488 137.872 51.5936 137.145C50.5241 136.814 49.417 136.648 48.2982 136.648L42.6687 136.68V135.381L48.2935 135.349C49.551 135.349 50.7968 135.537 51.9908 135.908C54.6845 136.738 57.0186 138.468 58.5558 140.766L58.5746 140.798C58.5887 140.821 58.6005 140.839 58.6122 140.862C59.2586 141.838 59.7499 142.889 60.0719 144C60.0977 144.055 60.1095 144.101 60.1142 144.129C60.4104 145.171 60.5631 146.252 60.5631 147.34L60.5725 147.344Z"
                fill="currentColor"
              />
              <path
                d="M62.9465 147.344C62.9465 149.667 62.3519 151.958 61.1837 154.162C61.1367 154.249 61.0802 154.341 61.0238 154.429C58.4383 158.889 53.5563 161.672 48.2958 161.672C46.5212 161.672 44.7818 161.359 43.1247 160.75H43.1106L42.9955 160.704C38.057 158.82 34.5454 154.491 33.805 149.384H33.7979L33.53 147.344L33.4971 147.1H34.9544L34.9732 147.344L35.1048 149.134C35.7559 153.771 38.9173 157.718 43.3809 159.455H43.395L43.5102 159.501C45.0357 160.076 46.6458 160.37 48.2935 160.37C53.0768 160.37 57.5169 157.838 59.8815 153.764C59.9356 153.679 59.9708 153.621 60.0014 153.562C61.0708 151.549 61.6138 149.453 61.6138 147.342C61.6138 146.192 61.4587 145.053 61.1555 143.951L61.1461 143.942L61.0991 143.779C60.7441 142.532 60.1941 141.345 59.4608 140.255L59.3503 140.08C57.6814 137.642 55.1852 135.813 52.3035 134.918C51.0036 134.518 49.6521 134.314 48.2911 134.314L42.6734 134.346V133.046L48.2888 133.014C49.7884 133.014 51.2763 133.237 52.7054 133.679C55.9209 134.675 58.7062 136.738 60.542 139.487L60.5655 139.524C60.5796 139.542 60.596 139.57 60.6078 139.602C61.3835 140.768 61.9711 142.031 62.3613 143.36C62.3871 143.422 62.4012 143.473 62.4083 143.501V143.507C62.7632 144.752 62.9418 146.045 62.9418 147.344H62.9465Z"
                fill="currentColor"
              />
              <path
                d="M65.3182 147.344C65.3182 150.144 64.6248 152.814 63.2639 155.282C63.2216 155.37 63.1534 155.478 63.0852 155.581C60.0789 160.764 54.4001 164 48.2864 164C46.2133 164 44.1848 163.639 42.2574 162.921H42.2386L42.1234 162.875C36.3318 160.667 32.2301 155.567 31.4169 149.566L31.1207 147.344L31.0878 147.1H32.5569L32.5757 147.344L32.7285 149.394C33.4759 154.896 37.2226 159.579 42.516 161.631H42.5301L42.6452 161.677C44.4481 162.355 46.3449 162.7 48.2864 162.7C53.9253 162.7 59.1599 159.719 61.9476 154.912C62.0064 154.82 62.051 154.753 62.0863 154.684C63.3532 152.389 63.9902 149.927 63.9902 147.344C63.9902 145.982 63.8045 144.63 63.4425 143.321L63.4331 143.312L63.3861 143.146C62.9677 141.674 62.3166 140.276 61.4516 138.99L61.3412 138.815C59.3667 135.912 56.4121 133.745 53.0133 132.703C51.4925 132.23 49.9036 131.988 48.2841 131.988L42.6758 132.02V130.721L48.2771 130.688C50.0399 130.688 51.7652 130.948 53.4153 131.464C57.1455 132.607 60.3822 135.004 62.5282 138.212L62.5517 138.252C62.5658 138.27 62.5822 138.3 62.5987 138.337C63.5083 139.698 64.1923 141.175 64.6436 142.725C64.6742 142.797 64.6906 142.854 64.6977 142.884C65.109 144.336 65.3182 145.835 65.3182 147.347V147.344Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p
            className={`${listText} text-shadow-dark sm:text-left md:text-base text-sm text-center`}
          >
            Department of Electrical Engineering <br />
            Jadavpur University <br />
            188, Raja Subodh Chandra Mallick Rd, Jadavpur, <br />
            Kolkata, West Bengal 700032 <br />
            India
          </p>
          <ul className="flex gap-x-4 mt-6 sm:justify-start justify-center">
            <li>
              <a
                href="https://www.instagram.com/convolution25?igsh=MXVoaGNibG5qeTQzdw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="iconBoxes">
                  <FaInstagram
                    className={`sm:size-7 size-6 text-${iconColor}`}
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/15Mh8tfiC7/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="iconBoxes">
                  <FaFacebookF
                    className={`sm:size-7 size-6 text-${iconColor}`}
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/convolution-juee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="iconBoxes">
                  <FaLinkedinIn
                    className={`sm:size-7 size-6 text-${iconColor}`}
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* ----------Get in touch------------- */}
        <div className="flex flex-col items-center">
          <h2 className={`text-3xl  font-me ${headerText} `}>Get In Touch</h2>

          <span className="h-1 w-14 mt-2 rounded-full bg-white"></span>
          <ul className="mt-6 flex flex-col gap-y-4 [&>*]:listFooter">
            <li>
              <div className="flex items-center justify-normal">
                <div className="iconBoxes">
                  <MdOutlineEmail
                    className={`sm:size-7 size-6 text-${iconColor}`}
                  />
                </div>
              </div>
              <div className="">
                <h1 className={`listHead ${headerText}`}>Email</h1>
                <p className={`md:text-base text-sm ${listText}`}>
                  convolutionx2025@gmail.com
                </p>
              </div>
            </li>
            <li>
              <a target="_blank" href="https://maps.app.goo.gl/wKYjjoLyR1ScsFEq5" className="flex items-center justify-normal">
                <div className="iconBoxes">
                  <MdLocationOn
                    className={`sm:size-7 size-6 text-${iconColor}`}
                  />
                </div>
              </a>
              <div className="">
                <h1 className={`listHead ${headerText}`}>Location</h1>
                <p className={`md:text-base text-sm ${listText}`}>
                  Department of Electrical Engineering, <br />
                  Jadavpur University
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-normal">
                <div className="iconBoxes">
                  <MdCall className={`sm:size-7 size-6 text-${iconColor}`} />
                </div>
              </div>
              <div className="">
                <h1 className={`listHead ${headerText}`}>Phone</h1>
                <p className={`md:text-base text-sm ${listText}`}>
                +91 8945909374
                </p>
                <p className={`md:text-base text-sm ${listText}`}>
                +91 8101369261
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* ----------------Event Link--------------- */}
        <div className="flex flex-col items-center sm:items-start md:items-center">
          <h2 className="text-3xl font-medium text-white text-shadow-dark">
            Events
          </h2>
          <span className="h-1 w-14 mt-2 rounded-full bg-white"></span>
          <ul className={`mt-6 ${linkText} `}>
            {events.map((event, index) => (
              <li key={index} className="hover:scale-105 text-lg sm:text-left text-center">
                <Link href={event.href}>{event.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-1 mt-10 w-[80vw] mx-auto rounded-sm bg-white/80"></div>
      <p className="font-sans text-white text-sm mt-1  text-center">Made with ❤️ by Team Convo</p>
    </>
  );
};

export default EventFooter;
