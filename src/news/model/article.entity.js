import {Source} from "./source.entity.js";

export class Article {
    constructor({
        author = '',
        title = '',
        description = '',
        url = '',
        urlToImage = '',
        source = null,
        publishedAt = ''}) {
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source) : null;
        this.publishedAt = new Date(publishedAt);
    }

    getFormattedPublishedAt() {
        return this.publishedAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'});
    }

    getFullFormattedPublishedAt() {
        let dateAsString = this.publishedAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'});
        let timeAsString = this.publishedAt.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'});
        return `on ${dateAsString} at ${timeAsString}`;
    }

}