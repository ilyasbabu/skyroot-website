export default function sitemap() {
    const baseURL = "https://www.skyroots.co.in"
    const embassySitemaps = [
        "embassy-attestation",
        "uae-attestation",
        "saudi-attestation",
        "qatar-attestation",
        "malaysia-attestation",
        "kuwait-attestation",
        "baharain-attestation",
        "other-attestation",
    ].map((item) => {
        return {
            url: `${baseURL}/embassy-attestation/${item}`,
            lastModified: new Date(),
        }
    })

    const attestationSitemaps = [
        "certificates-attestation",
        "apostle-attestation",
        "mea-attestation",
        "marriage-certificate-attestation",
        "birth-certificate-attestation",
        "norka-attestation",
        "hrd-attestation",
        "kerala-hrd",
        "home-dept-attestation",
        "commercial-documents",
        "educational-documents",
        "power-of-attorney",
        "sdm-chamber",
    ].map((item) => {
        return {
            url: `${baseURL}/attestation/${item}`,
            lastModified: new Date(),
        }
    })

    const moreSitemaps = [
        "uae-pcc",
        "oman-pcc",
        "pcc",
        "visa-stamping",
        "translations",
        "wes-iqas-verification",
        "notary",
    ].map((item) => {
        return {
            url: `${baseURL}/more/${item}`,
            lastModified: new Date(),
        }
    })

    return [
        {
            url: `${baseURL}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/track`,
            lastModified: new Date(),
        },
        ...embassySitemaps,
        ...attestationSitemaps,
        ...moreSitemaps,
    ]
}