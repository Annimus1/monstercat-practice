function Social(props) {
  const fillColor = '#fff'
  return (
    <div className={`flex ${ props.display=='flex-col'? 'lg:flex-col':""} gap-3`}>
            {/* Instagram */}
            <a href="https://www.instagram.com/monstercat">
              <svg fill={fillColor} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"/><circle cx="16.806" cy="7.207" r="1.078"/><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"/>
            </svg>
            </a>

            {/* Tiktok */}
            <a href="https://tiktok.com/@monstercat">
              <svg fill={fillColor} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/monstercat">
              <svg fill={fillColor} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/></svg>
            </a>

            {/* Twitch */}
            <a href="https://www.twitch.tv/monstercat">
              <svg fill={fillColor} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003zm-2.812-5.767v4.923h-1.688V7.924h1.688zm-4.502 0v4.923h-1.688V7.924h1.688z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/monstercat">
              <svg fill={fillColor} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>
            </a>

            {/* Discord */}
            <a href="https://discord.com/invite/monstercat">
              <svg fill={fillColor} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"/></svg>
            </a>

            {/* Monstercat */}
            <a href="https://www.monstercat.com/player">
              <svg fill={fillColor}  width="24" height="24" xmlns="http://www.w3.org/2000/svg" 
                viewBox="834 153 612.7 487">
                <path fill={fillColor} d="M1446.4,445.6c-0.8-24.3-4.5-47.1-19.5-63c-14.1-15-34.3-22.6-57-21.6c-2.3,0.1-3.8,0.1-5.2-1.1,c-3.6-62.8-16.1-147.6-32.4-187.1c-5.1-16.5-26.1-26.1-40.3-14.9c-25.8,14.9-57.2,38.6-83.1,61.9c-18.1-4.5-37.5-7.2-58.1-8,c-0.8,0-1.6-0.1-2.4-0.1l-5.9-0.1v-0.1l-2.3,0.1l-2.3-0.1v0.1l-5.9,0.1c-0.8,0-1.6,0-2.4,0.1c-20.6,0.7-40,3.4-58.1,8,c-25.9-23.3-57.4-47-83.1-61.9c-14.2-11.2-35.2-1.6-40.3,14.9C932,212.3,919.5,297,915.8,359.8c-1.4,1.2-2.9,1.2-5.1,1.1,c-22.7-1-42.9,6.7-57,21.6c-14.9,15.8-18.7,38.7-19.5,63c-0.5,15.2-0.5,20.5,2.4,41c4.7,33.4,28.7,60.2,61.8,63.1,c5.8,0.5,11.6,0.7,17.5,0.7c4.6,0,9.3-0.1,14-0.2c5-0.1,10.2-0.2,15.6-0.2c7.2,0,11.8-7.4,8.8-13.8c-4.5-9.5-8.2-18.9-11.3-28.2,c-2.7-8.3-4.9-16.6-6.4-24.7c-0.2-0.9-0.3-1.8-0.5-2.7c-5.2-29.6-3-58.5,6.6-87.4c13.1-39.4,37.2-72.4,71.5-98.2,c34.2-25.6,76.6-39.8,119.3-40h6.7h6.7c42.8,0.1,85.2,14.4,119.3,40c34.3,25.7,58.4,58.7,71.5,98.2c9.5,28.6,11.8,57.2,6.8,86.5,c-0.4,2.5-0.9,4.9-1.4,7.4c-1.7,8.1-4,16.2-6.8,24.4c-2.8,8.2-6.2,16.5-10.2,24.9c-3,6.4,1.7,13.8,8.8,13.8c5.4,0,10.6,0.1,15.6,0.2,c4.8,0.1,9.4,0.2,14,0.2c5.9,0,11.7-0.1,17.5-0.7c33-2.9,57-29.7,61.8-63.1C1446.9,466.1,1446.9,460.7,1446.4,445.6z"></path>
                <g>
                  <path fill={fillColor} d="M1140.4,277.9c-100,0-181.1,81.1-181.1,181.1c0,100,81.1,181.1,181.1,181.1c100,0,181.1-81.1,181.1-181.1,C1321.5,359,1240.4,277.9,1140.4,277.9z M1188.6,476.5c-23.1,13.7-45.9,27.7-69.7,40c-5.8,3.1-16.5,3.3-21.5-0.2,c-4-2.8-5.8-14.6-3.2-19.8c12.2-25.3,10.6-49.3-0.9-74.3c-6-13,1.3-23.2,16.6-23.3c1.4,0.5,5.3,1.5,8.7,3.4,c23.5,13.7,46.9,27.5,70.2,41.6C1205.4,453.9,1205.2,466.6,1188.6,476.5z"></path>
                </g>
              </svg>
            </a>
          </div>
  )
}

export default Social