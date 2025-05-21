

export default function getColor(van) {
    let color = "bg-[#FFFFFF]"

    if (van) {
        switch (van.type) {
            case "simple":
                color = "bg-[#E17654]";
                break;
            case "rugged":
                color = "bg-[#115E59]";
                break;
            case "luxury":
                color = "bg-[#161616]";
                break;
        }
    }
    return color
}

export function getActiveLink({ isActive }) {
    return isActive && "font-bold underline decoration-2"
}