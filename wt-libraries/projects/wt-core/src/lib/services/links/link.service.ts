import { Injectable } from '@angular/core';
import { Link } from '../../interfaces/link.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  constructor() {}

  /**
   * Determines if a link is present.
   * @param link true if the link is defined.
   */
  public hasLink(link: Link | undefined): boolean {
    return !!link;
  }

  /**
   * Checks whether the link is for a resource template.
   * @param link The link to check
   */
  public isTemplateLink(link: Link | undefined): boolean {
    if (!link) {
      return false;
    }

    return link.href.includes('template');
  }

  /**
   * Removes the template suffix from the link
   * @param link The link to get the create url from
   */
  public getCreateUrlFromTemplateUrl(link: Link | undefined): string | null {
    if (!link || !this.isTemplateLink(link)) {
      return null;
    }

    const re: RegExp = /\/template/gi;

    return link.href.replace(re, '');
  }
}
