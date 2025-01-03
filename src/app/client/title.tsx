"use client";

import { useEffect, useRef } from "react";

export default function Title() {
  const titleSvgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const nameSvg = [...document.getElementsByClassName("name-svg")];
    const titleSvg = titleSvgRef.current;

    const showTitle = () => {
      nameSvg.map((svg) => svg.classList.add("animate"));

      setTimeout(() => {
        nameSvg.map((svg) => svg.classList.add("filled"));
      }, 2300);

      setTimeout(() => {
        if (titleSvg) titleSvg.classList.add("svg-show");
      }, 2100);
    };

    showTitle();
  }, []);

  return (
    <div className="title-container w-full lg:w-1/2">
      <div className="title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 351 105"
          fill="none"
          width="100%"
          height="auto"
        >
          <title>Justin Cefai - Front End Web Developer</title>
          <path
            className="name-svg"
            d="M28.182 26.484V1.866H38.544V25.89C38.544 34.8 37.818 48 20.13 48C2.706 48 1.782 35.13 1.782 31.236C7.59 31.236 11.088 31.236 12.606 31.236C12.606 33.084 13.134 38.892 20.13 38.892C27.852 38.892 28.182 31.434 28.182 26.484ZM74.4766 25.56C74.4766 20.544 74.4766 1.8 74.4766 1.8H84.9706C84.9706 1.8 84.9706 20.412 84.9706 26.748C84.9706 33.018 84.9706 48 64.1146 48C43.1926 48 43.2586 33.81 43.2586 26.682V1.8H53.2906V25.56C53.2906 32.49 53.5546 38.826 64.0486 38.826C74.6746 38.826 74.4766 30.576 74.4766 25.56ZM110.574 20.016C120.936 21.732 132.75 23.25 132.75 33.678C132.75 45.162 125.094 48 111.564 48C88.7941 48 88.8601 35.394 88.8601 30.972C90.9061 30.972 93.4801 30.972 99.1561 30.972C99.1561 37.902 105.294 39.024 111.3 39.024C118.89 39.024 122.058 37.242 122.058 33.678C122.058 30.576 118.89 29.982 109.848 28.662C95.9881 26.616 89.7841 23.778 89.7841 15.33C89.7841 8.796 94.6021 1.272 109.716 1.272C127.668 1.272 131.232 11.304 131.232 18.3C131.232 18.3 124.236 18.3 120.672 18.3C120.672 15.132 119.286 10.38 109.716 10.38C101.928 10.38 100.146 13.152 100.146 15.396C100.146 17.838 102.852 18.762 110.574 20.016ZM133.882 10.974V1.8H178.828V10.974H161.338V48H151.306V10.974H133.882ZM193.447 48H183.415V1.8H193.447V48ZM234.239 34.998V1.8H244.271V48H229.817L209.555 14.868H208.433V48H198.401V1.8H211.931V1.866H212.855L233.051 34.998H234.239Z"
            fill="none"
            stroke="white"
          />
          <path
            className="name-svg"
            d="M191.488 84.444H201.916C200.992 94.74 192.016 102 179.146 102C165.88 102 155.782 94.014 155.782 78.57C155.782 63.39 165.88 55.074 179.146 55.074C192.016 55.074 201.256 62.796 201.916 72.696H191.488C190.036 67.68 186.604 65.304 179.146 65.304C171.226 65.304 165.748 69.396 165.748 78.57C165.748 87.744 171.226 91.77 179.146 91.77C186.868 91.77 190.234 88.998 191.488 84.444ZM205.895 55.8H243.845V64.908H215.927V74.412H243.845V83.454H215.927V92.826H243.845V102H215.927H205.895V55.8ZM248.532 55.8H287.868V64.908H258.564V74.412H286.482V83.454H258.564V102H248.532V55.8ZM316.249 55.866L332.749 102H322.321L319.615 94.41H296.053L293.281 102H282.919L299.419 55.866H316.249ZM299.287 85.236H316.315L309.121 64.974H306.547L299.287 85.236ZM345.964 102H335.932V55.8H345.964V102Z"
            fill="none"
            stroke="white"
          />
          <g id="title-svg">
            <path
              d="M303.43 3.39H304.96L303.2 9H301.14L300.11 5.68L299.09 9H297.03L295.27 3.39H296.8L298.1 7.52L299.37 3.39H300.85L302.13 7.52L303.43 3.39ZM311.663 6.55H307.183C307.293 7.3 307.743 7.67 308.723 7.67C309.633 7.67 310.083 7.42 310.223 7.05H311.693C311.543 8.26 310.563 9 308.723 9C306.803 9 305.713 8.04 305.713 6.17C305.713 4.34 306.833 3.34 308.723 3.34C309.513 3.34 310.153 3.54 310.623 3.87V3.86C311.703 4.6 311.803 5.78 311.723 6.55H311.663ZM308.723 4.67C307.883 4.67 307.423 4.98 307.243 5.55H310.203C310.083 5.13 309.803 4.67 308.723 4.67ZM316.946 3.39C319.316 3.39 319.566 5.38 319.566 6.2C319.566 6.95 319.306 9 316.946 9C315.896 9 315.256 8.71 314.876 8.22H314.806V9H313.286V1.78H314.806V4.22H314.886C315.266 3.72 315.906 3.39 316.946 3.39ZM316.506 7.7C317.956 7.7 318.116 6.6 318.116 6.2C318.116 5.76 317.956 4.7 316.506 4.7C315.186 4.7 314.916 5.44 314.916 6.2C314.916 7.05 315.186 7.7 316.506 7.7ZM330.124 1.78H331.644V9H330.124V8.22H330.054C329.674 8.71 329.034 9 327.974 9C325.624 9 325.364 6.95 325.364 6.2C325.364 5.38 325.614 3.39 327.984 3.39C329.024 3.39 329.654 3.72 330.034 4.22H330.124V1.78ZM328.424 7.7C329.734 7.7 330.004 7.05 330.004 6.2C330.004 5.44 329.734 4.7 328.424 4.7C326.964 4.7 326.814 5.76 326.814 6.2C326.814 6.6 326.974 7.7 328.424 7.7ZM339.042 6.55H334.562C334.672 7.3 335.122 7.67 336.102 7.67C337.012 7.67 337.462 7.42 337.602 7.05H339.072C338.922 8.26 337.942 9 336.102 9C334.182 9 333.092 8.04 333.092 6.17C333.092 4.34 334.212 3.34 336.102 3.34C336.892 3.34 337.532 3.54 338.002 3.87V3.86C339.082 4.6 339.182 5.78 339.102 6.55H339.042ZM336.102 4.67C335.262 4.67 334.802 4.98 334.622 5.55H337.582C337.462 5.13 337.182 4.67 336.102 4.67ZM344.718 3.43H346.328L344.168 9H341.848L339.688 3.43H341.288L342.928 7.65H343.078L344.718 3.43Z"
              fill="white"
              stroke="none"
            />
            <path
              d="M326.5 14.6C327.77 14.79 329.21 15.01 329.21 16.34C329.21 17.73 328.21 18 326.49 18C325.22 18 324.35 17.77 323.9 17.32C323.51 16.93 323.51 16.46 323.52 16.17V16.06H325.08V16.11C325.08 16.59 325.44 16.81 326.45 16.81C327.06 16.81 327.64 16.73 327.64 16.36C327.64 15.94 327.1 15.86 326.49 15.79C326.41 15.78 326.33 15.77 326.25 15.76C324.64 15.55 323.64 15.19 323.64 14.07C323.64 13.29 324.09 12.36 326.25 12.36C328.57 12.36 329.06 13.39 329.06 14.25V14.3H327.51V14.25C327.51 13.81 327.13 13.57 326.25 13.57C325.4 13.57 325.22 13.88 325.22 14.05C325.22 14.3 325.39 14.44 326.37 14.59L326.5 14.6ZM338.012 12.39H339.542L337.782 18H335.722L334.692 14.68L333.672 18H331.612L329.852 12.39H331.382L332.682 16.52L333.952 12.39H335.432L336.712 16.52L338.012 12.39ZM346.245 15.55H341.765C341.875 16.3 342.325 16.67 343.305 16.67C344.215 16.67 344.665 16.42 344.805 16.05H346.275C346.125 17.26 345.145 18 343.305 18C341.385 18 340.295 17.04 340.295 15.17C340.295 13.34 341.415 12.34 343.305 12.34C344.095 12.34 344.735 12.54 345.205 12.87V12.86C346.285 13.6 346.385 14.78 346.305 15.55H346.245ZM343.305 13.67C342.465 13.67 342.005 13.98 341.825 14.55H344.785C344.665 14.13 344.385 13.67 343.305 13.67Z"
              fill="white"
              stroke="none"
            />
            <g className="plus">
              <line
                x1="315.75"
                y1="12.5"
                x2="315.75"
                y2="18"
                stroke="white"
                fill="white"
                strokeWidth="1.5"
              />
              <line
                x1="313"
                y1="15.25"
                x2="318.5"
                y2="15.25"
                stroke="white"
                fill="white"
                strokeWidth="1.5"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
