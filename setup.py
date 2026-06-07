from setuptools import setup, find_packages

setup(
    name="norck_theme",
    version="0.0.1",
    description="Norck ERPNext Custom Theme",
    author="Norck GmbH",
    author_email="info@norck.fr",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=["frappe"],
)
