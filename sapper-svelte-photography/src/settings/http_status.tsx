/**
 * List of HTTP status codes
 */
export const HTTP_STATUS = {
    OK: 200,
    /**
     * The server has successfully fulfilled the request and that there is no additional content to send in the response payload body
     * @see https://tools.ietf.org/html/rfc7231#section-6.3.5
     */
    NoContent: 204,
    /**
     * The server is successfully fulfilling a range request for the target resource
     * by transferring one or more parts of the selected representation that correspond to
     * the satisfiable ranges found in the request's Range header field
     * @see https://tools.ietf.org/html/rfc7233#section-4.1
     */
    PartialContent: 206,
    /**
     * The request has not been applied because it lacks valid authentication credentials for the target resource.
     * @see https://tools.ietf.org/html/rfc7235#section-3.1
     */
    Unauthorized: 401,
    /**
     * The server understood the request but refuses to authorize it
     * @see https://tools.ietf.org/html/rfc7231#section-6.5.3
     */
    Forbidden: 403,
    RangeNotSatisfiable: 416
};
