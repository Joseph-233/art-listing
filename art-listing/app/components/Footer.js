export default function Footer() {
    return (
        <footer style={{ ...styles.footer, backgroundColor: 'white', color: 'black' }}>
            <div style={styles.container}>
                <div style={styles.content}>
                    <p style={styles.text}>© {new Date().getFullYear()} ArtSpot. All rights reserved.</p>
                    <p style={styles.text}>Follow us on social media!</p>
                </div>
                <div style={styles.socialLinks}>
                    {/* SVG for logo1 */}
                    <div style={styles.logo} dangerouslySetInnerHTML={{ __html: `
                      <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="g5891"><path d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z" id="background" style="fill:#2867b2;"/><g id="shapes"><rect height="257.962" id="rect11" style="fill:#fff;" width="85.76" x="61.053" y="178.667"/><path d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z" id="path13-0" style="fill:#fff;fill-rule:nonzero;"/><path d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z" id="path15" style="fill:#fff;fill-rule:nonzero;"/></g></g></svg>
                    ` }} />
                    {/* SVG for logo2 */}
                    <div style={styles.logo} dangerouslySetInnerHTML={{ __html: `
                      <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z" style="fill:#ed1f24;fill-rule:nonzero;"/><path d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z" style="fill:#fff;fill-rule:nonzero;"/></g></svg>
                    ` }} />
                    {/* SVG for logo3 */}
                    <div style={styles.logo} dangerouslySetInnerHTML={{ __html: `
                      <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="WhatsApp-Logo-Icon"><path d="M116.225,-0.001c-11.264,0.512 -26.112,1.536 -32.768,3.072c-10.24,2.048 -19.968,5.12 -27.648,9.216c-9.728,4.608 -17.92,10.752 -25.088,17.92c-7.68,7.68 -13.824,15.872 -18.432,25.6c-4.096,7.68 -7.168,17.408 -9.216,27.648c-1.536,6.656 -2.56,21.504 -2.56,32.768c-0.512,4.608 -0.512,10.752 -0.512,13.824l0,251.905l0,13.824c0.512,11.264 1.536,26.112 3.072,32.768c2.048,10.24 5.12,19.968 9.216,27.648c4.608,9.728 10.752,17.92 17.92,25.088c7.68,7.68 15.872,13.824 25.6,18.432c7.68,4.096 17.408,7.168 27.648,9.216c6.656,1.536 21.504,2.56 32.768,2.56c4.608,0.512 10.752,0.512 13.824,0.512l251.904,0l13.824,0c11.264,-0.512 26.112,-1.536 32.768,-3.072c10.24,-2.048 19.968,-5.12 27.648,-9.216c9.728,-4.608 17.92,-10.752 25.088,-17.92c7.68,-7.68 13.824,-15.872 18.432,-25.6c4.096,-7.68 7.168,-17.408 9.216,-27.648c1.536,-6.656 2.56,-21.504 2.56,-32.768c0.512,-4.608 0.512,-10.752 0.512,-13.824l0,-265.729c-0.512,-11.264 -1.536,-26.112 -3.072,-32.768c-2.048,-10.24 -5.12,-19.968 -9.216,-27.648c-4.608,-9.728 -10.752,-17.92 -17.92,-25.088c-7.68,-7.68 -15.872,-13.824 -25.6,-18.432c-7.68,-4.096 -17.408,-7.168 -27.648,-9.216c-6.656,-1.536 -21.504,-2.56 -32.768,-2.56c-4.608,-0.512 -10.752,-0.512 -13.824,-0.512l-265.728,0Z" style="fill:url(#_Linear1);fill-rule:nonzero;"/><path d="M344.754,289.698c-4.56,-2.282 -26.98,-13.311 -31.161,-14.832c-4.18,-1.521 -7.219,-2.282 -10.259,2.282c-3.041,4.564 -11.78,14.832 -14.44,17.875c-2.66,3.042 -5.32,3.423 -9.88,1.14c-4.561,-2.281 -19.254,-7.095 -36.672,-22.627c-13.556,-12.087 -22.709,-27.017 -25.369,-31.581c-2.66,-4.564 -0.283,-7.031 2,-9.304c2.051,-2.041 4.56,-5.324 6.84,-7.986c2.28,-2.662 3.04,-4.564 4.56,-7.606c1.52,-3.042 0.76,-5.705 -0.38,-7.987c-1.14,-2.282 -10.26,-24.72 -14.06,-33.848c-3.701,-8.889 -7.461,-7.686 -10.26,-7.826c-2.657,-0.132 -5.7,-0.16 -8.74,-0.16c-3.041,0 -7.98,1.141 -12.161,5.704c-4.18,4.564 -15.96,15.594 -15.96,38.032c0,22.438 16.34,44.116 18.62,47.159c2.281,3.043 32.157,49.089 77.902,68.836c10.88,4.697 19.374,7.501 25.997,9.603c10.924,3.469 20.866,2.98 28.723,1.806c8.761,-1.309 26.98,-11.029 30.781,-21.677c3.799,-10.649 3.799,-19.777 2.659,-21.678c-1.139,-1.902 -4.179,-3.043 -8.74,-5.325m-83.207,113.573l-0.061,0c-27.22,-0.011 -53.917,-7.32 -77.207,-21.137l-5.539,-3.287l-57.413,15.056l15.325,-55.959l-3.608,-5.736c-15.184,-24.145 -23.203,-52.051 -23.192,-80.704c0.033,-83.611 68.083,-151.635 151.756,-151.635c40.517,0.016 78.603,15.811 107.243,44.474c28.64,28.663 44.404,66.764 44.389,107.283c-0.035,83.617 -68.083,151.645 -151.693,151.645m129.102,-280.709c-34.457,-34.486 -80.281,-53.487 -129.103,-53.507c-100.595,0 -182.468,81.841 -182.508,182.437c-0.013,32.156 8.39,63.546 24.361,91.212l-25.892,94.545l96.75,-25.37c26.657,14.535 56.67,22.194 87.216,22.207l0.075,0c100.586,0 182.465,-81.852 182.506,-182.448c0.019,-48.751 -18.946,-94.59 -53.405,-129.076" style="fill:#fff;"/></g><defs><linearGradient gradientTransform="matrix(0,-512,-512,0,256.001,512)" gradientUnits="userSpaceOnUse" id="_Linear1" x1="0" x2="1" y1="0" y2="0"><stop offset="0" style="stop-color:#25cf43;stop-opacity:1"/><stop offset="1" style="stop-color:#61fd7d;stop-opacity:1"/></linearGradient></defs></svg>
                    ` }} />
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#000',
        color: '#0070f3',
        padding: '20px',
        marginTop: '20px',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        marginBottom: '20px',
    },
    text: {
        margin: '5px 0',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    link: {
        color: '#0070f3',
        textDecoration: 'none',
    },
    logo: {
        width: '30px', // Adjust the logo size as needed
        height: 'auto',
        margin: '0 10px', // Adjust spacing around logos
    },
};
