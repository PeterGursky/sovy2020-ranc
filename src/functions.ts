interface MenuItem {
    local: string;
    label: string;
}

export const linkGenerator = (entry:MenuItem, page: string) => {
    const active = (entry.local === page) ? ' class="active"' : '';
    const alternative =
     '<li><a href="' +entry.local + '"' + active + '>' + entry.label + '</a></li>';
    return `<li><a href="${entry.local}"${active}>${entry.label}</a></li>`;
};