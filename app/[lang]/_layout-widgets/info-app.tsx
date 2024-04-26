import pkgJson from "@/package.json";

import Text from '@/app/_components/text/text';

export default function InfoApp() {
    return (
        <Text type="bodySmall" text={`${pkgJson.name} ${pkgJson.version}`} />
    );
}