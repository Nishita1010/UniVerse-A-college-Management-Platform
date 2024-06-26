import * as React from "react";

function IconFilter(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props} >
            <path d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 01-1.41 0L9.29 16.7a.989.989 0 01-.29-.83v-5.12L4.21 4.62a1 1 0 01.17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 01.17 1.4L15 10.75v9.13M7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5H7.04z" />
        </svg>
    );
}

export default IconFilter;